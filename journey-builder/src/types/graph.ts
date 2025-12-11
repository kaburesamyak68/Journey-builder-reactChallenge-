export interface FormField {
  id: string;
  label: string;
  type: string;
}

export interface FormNode {
  id: string;
  name: string;
  fields: FormField[];
  /**
   * Forms that must be submitted before this form.
   */
  parents: string[];
  /**
   * Forms that depend on this form.
   */
  children: string[];
}

export interface FormGraphResponse {
  forms: FormNode[];
}
