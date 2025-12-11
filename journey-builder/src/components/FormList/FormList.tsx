import { Drawer, Toolbar, List, ListItemButton, ListItemText } from "@mui/material";
import { useForms } from "../../hooks/useForms";
import { usePrefill } from "../../hooks/usePrefill";

export default function FormList() {
  const { forms } = useForms();
  const { selectedFormId, selectForm } = usePrefill();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
          background: "#111",
          color: "#fff",
        },
      }}
    >
      <Toolbar />
      <List>
        {forms.map((form) => (
          <ListItemButton
            key={form.id}
            selected={selectedFormId === form.id}
            onClick={() => selectForm(form.id)}
            sx={{
              "&.Mui-selected": { background: "#333" },
              "&:hover": { background: "#222" },
            }}
          >
            <ListItemText primary={form.name} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
