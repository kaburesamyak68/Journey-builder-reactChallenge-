import { act } from "react-dom/test-utils";
import { usePrefill } from "../hooks/usePrefill";

describe("usePrefill store", () => {
  it("updates selected form id", () => {
    act(() => {
      usePrefill.getState().selectForm("D");
    });
    expect(usePrefill.getState().selectedFormId).toBe("D");
  });
  it("opens and closes modal", () => {
    act(() => usePrefill.getState().openModal("email"));
    expect(usePrefill.getState().modalOpen).toBe(true);
    expect(usePrefill.getState().modalTargetFieldId).toBe("email");
    act(() => usePrefill.getState().closeModal());
    expect(usePrefill.getState().modalOpen).toBe(false);
  });
  it("sets field mapping", () => {
    act(() => {
      usePrefill.getState().setMapping("D", "email", {
        sourceFormId: "A",
        sourceFieldId: "name",
      });
    });
    expect(usePrefill.getState().mappings["D"]["email"]).toEqual({
      sourceFormId: "A",
      sourceFieldId: "name",
    });
  });
});
