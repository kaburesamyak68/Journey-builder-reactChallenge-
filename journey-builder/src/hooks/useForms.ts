import { create } from "zustand";
import { fetchForms } from "../api/formsApi";
import { FormNode } from "../types/graph";

interface FormsState {
  forms: FormNode[];
  isLoading: boolean;
  loadForms: () => Promise<void>;
}

/**
 * Global store for the list of forms. Handles fetching and caching.
 */
export const useForms = create<FormsState>((set) => ({
  forms: [],
  isLoading: false,
  loadForms: async () => {
    set({ isLoading: true });
    const res = await fetchForms();
    set({ forms: res.forms, isLoading: false });
  }
}));
