import { create } from "zustand";
import { PrefillMapping, PrefillMappingItem } from "../types/form";

interface PrefillState {
  selectedFormId: string | null;
  mappings: Record<string, PrefillMapping>;
  modalOpen: boolean;
  modalTargetFieldId: string | null;
  selectForm: (id: string) => void;
  openModal: (fieldId: string) => void;
  closeModal: () => void;
  setMapping: (
    formId: string,
    fieldId: string,
    mapping: PrefillMappingItem | null
  ) => void;
}

/**
 * Store for tracking the selected form, open modals, and field mappings.
 */
export const usePrefill = create<PrefillState>((set) => ({
  selectedFormId: null,
  mappings: {},
  modalOpen: false,
  modalTargetFieldId: null,
  selectForm: (id) => set({ selectedFormId: id }),
  openModal: (fieldId) =>
    set({ modalOpen: true, modalTargetFieldId: fieldId }),
  closeModal: () => set({ modalOpen: false, modalTargetFieldId: null }),
  setMapping: (formId, fieldId, mapping) =>
    set((state) => ({
      mappings: {
        ...state.mappings,
        [formId]: {
          ...(state.mappings[formId] || {}),
          [fieldId]: mapping
        }
      }
    }))
}));
