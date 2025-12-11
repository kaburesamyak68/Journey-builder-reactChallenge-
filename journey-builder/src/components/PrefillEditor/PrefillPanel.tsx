import { Box, Typography, Paper, Stack } from "@mui/material";
import { useForms } from "../../hooks/useForms";
import { usePrefill } from "../../hooks/usePrefill";
import PrefillFieldRow from "./PrefillFieldRow";

export default function PrefillPanel() {
  const { forms } = useForms();
  const { selectedFormId } = usePrefill();

  const form = forms.find((f) => f.id === selectedFormId);

  // ------------------------------------------------------------
  // EMPTY STATE (NO FORM SELECTED)
  // ------------------------------------------------------------
 if (!form) {
  return (
    <Box
      sx={{
        flex: 1,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F7F8FA",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 6,
          borderRadius: 3,
          textAlign: "center",
          maxWidth: 420,
          bgcolor: "white",
          border: "1px solid #E5E8EC",
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "#EEF2FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
          }}
        >
          <span style={{ fontSize: 32, color: "#4F46E5" }}>📄</span>
        </Box>

        {/* Title */}
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Select a form
        </Typography>

        {/* Subtitle */}
        <Typography sx={{ color: "#6B7280", fontSize: "1.1rem" }}>
          Choose a form from the sidebar to configure its prefill mappings.
        </Typography>
      </Paper>
    </Box>
  );
}

  // ------------------------------------------------------------
  // MAIN UI (FORM SELECTED)
  // ------------------------------------------------------------
  return (
    <Box
      sx={{
        ml: 30,
        p: 4,
        height: "100vh",
        overflowY: "auto",
        background: "#FAFAFA",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
        Prefill Configuration
      </Typography>

      <Typography variant="h6" sx={{ mb: 3, color: "#444" }}>
        {form.name}
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 3,
          background: "white",
        }}
      >
        <Stack spacing={2}>
          {form.fields.map((field) => (
            <PrefillFieldRow key={field.id} field={field} form={form} />
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}
