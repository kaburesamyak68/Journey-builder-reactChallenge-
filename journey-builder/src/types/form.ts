/**
 * Represents a single prefill mapping for a field. Defines which form and field
 * a target field should be filled from.
 */
export interface PrefillMappingItem {
  sourceFormId: string;
  sourceFieldId: string;
}

/**
 * Stores prefill mappings keyed by field ID. A null value means no mapping.
 */
export interface PrefillMapping {
  [fieldId: string]: PrefillMappingItem | null;
}
