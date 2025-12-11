import { FormNode } from "../types/graph";

/**
 * Traverse the DAG to collect all upstream forms (direct and transitive parents).
 * Returns a list of unique parent forms for the given form ID.
 */
export function getUpstreamForms(
  forms: FormNode[],
  formId: string
): FormNode[] {
  const result: FormNode[] = [];
  const visited = new Set<string>();

  function dfs(id: string) {
    const f = forms.find((x) => x.id === id);
    if (!f) return;
    for (const parentId of f.parents) {
      if (!visited.has(parentId)) {
        visited.add(parentId);
        const parent = forms.find((x) => x.id === parentId);
        if (parent) result.push(parent);
        dfs(parentId);
      }
    }
  }

  dfs(formId);
  return result;
}
