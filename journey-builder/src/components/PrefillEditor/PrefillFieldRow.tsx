import { Box, Button, Paper, Typography } from "@mui/material";
import { FormField, FormNode } from "../../types/graph";
import { usePrefill } from "../../hooks/usePrefill";
import DataElementModal from "./DataElementModal";

/**
 * Modern horizontal field row with spacing and clean layout
 */
export default function PrefillFieldRow({
  field,
  form,
}: {
  field: FormField;
  form: FormNode;
}) {
  const {
    mappings,
    modalOpen,
    modalTargetFieldId,
    openModal,
    closeModal,
    setMapping,
  } = usePrefill();

  const formMapping = mappings[form.id] || {};
  const currentMapping = formMapping[field.id] || null;

  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        minHeight: "70px",
      }}
    >
      {/* LEFT: Field Name + Mapping */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography fontWeight={600} sx={{ fontSize: "0.95rem" }}>
          {field.label}
        </Typography>

        <Typography sx={{ color: "#666", mt: 0.3, fontSize: "0.85rem" }}>
          {currentMapping
            ? `${currentMapping.sourceFormId}.${currentMapping.sourceFieldId}`
            : "No mapping"}
        </Typography>
      </Box>

      {/* RIGHT: Buttons */}
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => openModal(field.id)}
          sx={{ textTransform: "none", fontWeight: 600 }}
        >
          Set
        </Button>

        {currentMapping && (
          <Button
            variant="outlined"
            color="error"
            size="small"
            sx={{ textTransform: "none", fontWeight: 600 }}
            onClick={() => setMapping(form.id, field.id, null)}
          >
            Clear
          </Button>
        )}
      </Box>

      {/* Modal */}
      {modalOpen && modalTargetFieldId === field.id && (
        <DataElementModal
          form={form}
          field={field}
          onSelect={(mapping) => {
            setMapping(form.id, field.id, mapping);
            closeModal();
          }}
          onClose={closeModal}
        />
      )}
    </Paper>
  );
}
