import { useEffect } from "react";
import { useForms } from "./hooks/useForms";
import FormList from "./components/FormList/FormList";
import PrefillPanel from "./components/PrefillEditor/PrefillPanel";

export default function App() {
  const { loadForms } = useForms();

  useEffect(() => {
    // Load mock data on startup
    loadForms();
  }, [loadForms]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <FormList />
      <PrefillPanel />
    </div>
  );
}
