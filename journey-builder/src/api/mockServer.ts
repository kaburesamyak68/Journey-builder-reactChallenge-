import { FormGraphResponse } from "../types/graph";

// Mock data representing a small graph of forms.
export const mockGraph: FormGraphResponse = {
  forms: [
    {
      id: "A",
      name: "Form A",
      fields: [
        { id: "email", label: "Email", type: "text" },
        { id: "name", label: "Name", type: "text" },
        { id: "age", label: "Age", type: "number" }
      ],
      parents: [],
      children: ["B", "C"]
    },
    {
      id: "B",
      name: "Form B",
      fields: [
        { id: "dynamic_checkbox_group", label: "Checkbox Group", type: "checkbox" },
        { id: "email", label: "Email", type: "text" },
        { id: "status", label: "Status", type: "text" }
      ],
      parents: ["A"],
      children: ["D"]
    },
    {
      id: "C",
      name: "Form C",
      fields: [
        { id: "dynamic_object", label: "Dynamic Object", type: "object" },
        { id: "comments", label: "Comments", type: "text" }
      ],
      parents: ["A"],
      children: ["E"]
    },
    {
      id: "D",
      name: "Form D",
      fields: [
        { id: "email", label: "Email", type: "text" },
        { id: "dynamic_checkbox_group", label: "Checkbox Group", type: "checkbox" },
        { id: "dynamic_object", label: "Dynamic Object", type: "object" }
      ],
      parents: ["B"],
      children: []
    },
    {
      id: "E",
      name: "Form E",
      fields: [
        { id: "email", label: "Email", type: "text" },
        { id: "notes", label: "Notes", type: "text" }
      ],
      parents: ["C"],
      children: []
    }
  ]
};
