Journey Builder – Prefill Mapping UI

This project is a React + TypeScript implementation of the Avantos “Prefill Mapping” coding challenge. The goal is to load a set of forms (represented as a directed graph) and allow users to configure how fields in one form should be prefilled using data from upstream forms.

The UI includes a sidebar with all forms, a main panel showing form fields, and a modal for selecting which upstream data element should be used for prefill. The design focuses on clarity, usability, and easy extension.


What the Project Does
1. Loads a mock form graph

Each form includes:

Form ID and name

List of fields

Parent/child relationships

2. Displays forms in a sidebar

Clicking a form updates the main view.

3. Shows a clean Prefill Configuration panel

For each field, the UI shows:

Field name

Current mapping (if any)

Buttons to Set or Clear the mapping

4. Lets users select a data source through a modal

The modal includes:

A list of all upstream forms

A searchable list of fields within the selected form

Clicking a field assigns the mapping

5. Stores mappings in local state

Mappings follow this structure:
{ sourceFormId, sourceFieldId }

🛠️ Tech Stack

React 18
TypeScript
Vite
Material UI (MUI)
Custom hooks (useForms, usePrefill)
Utility functions for graph traversal (getUpstreamForms)

📁 Folder Structure

src/
  components/
    FormList/
      FormList.tsx
    PrefillEditor/
      DataElementModal.tsx
      PrefillFieldRow.tsx
      PrefillPanel.tsx

  hooks/
    useForms.ts
    usePrefill.ts

  tests/
    graphUtils.test.ts
    PrefillFieldRow.test.tsx
    setupTests.ts
    usePrefill.test.ts

  types/
    form.ts
    graph.ts

  utils/
    graphUtils.ts

  App.tsx
  main.tsx
  styles.css

How to Run the Project
1. Install dependencies
npm install

2. Start the development server
npm run dev

3. Open in browser
http://localhost:5173
