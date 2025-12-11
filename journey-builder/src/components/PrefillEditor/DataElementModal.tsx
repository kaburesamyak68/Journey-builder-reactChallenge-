import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Paper,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Box,
  Divider,
} from "@mui/material";
import { useState, useMemo } from "react";

import { FormNode, FormField } from "../../types/graph";
import { PrefillMappingItem } from "../../types/form";
import { useForms } from "../../hooks/useForms";
import { getUpstreamForms } from "../../utils/graphUtils";

interface DataElementModalProps {
  form: FormNode;
  field: FormField;
  onSelect: (mapping: PrefillMappingItem) => void;
  onClose: () => void;
}

export default function DataElementModal({
  form,
  field,
  onSelect,
  onClose,
}: DataElementModalProps) {
  const { forms } = useForms();
  const upstreamForms = getUpstreamForms(forms, form.id);

  const [selectedForm, setSelectedForm] = useState<FormNode | null>(null);
  const [search, setSearch] = useState("");

  // Filter fields dynamically
  const filteredFields = useMemo(() => {
    if (!selectedForm) return [];
    if (!search.trim()) return selectedForm.fields;

    return selectedForm.fields.filter((f) =>
      f.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, selectedForm]);

  return (
    <Dialog
      open
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          height: "80vh",
        },
      }}
    >
      <DialogTitle sx={{ fontSize: "1.3rem", fontWeight: 700 }}>
        Select Data Element to Map
      </DialogTitle>

      <DialogContent dividers sx={{ display: "flex", gap: 3 }}>
        {/* LEFT PANEL */}
        <Paper
          sx={{
            width: "30%",
            height: "100%",
            p: 2,
            borderRadius: 3,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            Available Data Sources
          </Typography>

          <List dense sx={{ mt: 1 }}>
            {upstreamForms.length === 0 && (
              <Typography sx={{ mt: 2, color: "gray" }}>
                No upstream forms found.
              </Typography>
            )}

            {upstreamForms.map((f) => (
              <ListItemButton
                key={f.id}
                selected={selectedForm?.id === f.id}
                onClick={() => setSelectedForm(f)}
                sx={{
                  borderRadius: 1,
                  "&.Mui-selected": {
                    background: "#ececff",
                    color: "#4338ca",
                  },
                }}
              >
                <ListItemText primary={f.name} />
              </ListItemButton>
            ))}
          </List>
        </Paper>

        {/* RIGHT PANEL */}
        <Paper
          sx={{
            flex: 1,
            height: "100%",
            p: 2,
            borderRadius: 3,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
            {selectedForm ? selectedForm.name : "Select a form"}
          </Typography>

          {selectedForm && (
            <TextField
              fullWidth
              size="small"
              placeholder="Search fields…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ mb: 2 }}
            />
          )}

          <Divider sx={{ mb: 2 }} />

          {!selectedForm && (
            <Typography sx={{ mt: 2, color: "gray" }}>
              Select a form from the left to view fields.
            </Typography>
          )}

          {selectedForm &&
            filteredFields.map((pf) => (
              <ListItemButton
                key={pf.id}
                onClick={() =>
                  onSelect({
                    sourceFormId: selectedForm.id,
                    sourceFieldId: pf.id,
                  })
                }
                sx={{
                  border: "1px solid #e0e0e0",
                  borderRadius: 1,
                  mb: 1,
                  "&:hover": { background: "#f5f5ff" },
                }}
              >
                <ListItemText primary={pf.label} />
              </ListItemButton>
            ))}

          {selectedForm && filteredFields.length === 0 && (
            <Typography sx={{ color: "gray", mt: 2 }}>
              No matching fields.
            </Typography>
          )}
        </Paper>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
