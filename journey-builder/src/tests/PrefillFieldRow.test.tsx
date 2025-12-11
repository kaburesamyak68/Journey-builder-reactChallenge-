import { render, screen, fireEvent } from "@testing-library/react";
import PrefillFieldRow from "../components/PrefillEditor/PrefillFieldRow";
import { usePrefill } from "../hooks/usePrefill";
import { useForms } from "../hooks/useForms";

// Mock the Zustand stores for isolated testing
vi.mock("../hooks/useForms");
vi.mock("../hooks/usePrefill");

describe("PrefillFieldRow", () => {
  const mockForm = {
    id: "D",
    name: "Form D",
    fields: [],
    parents: ["B"],
    children: [],
  };
  const mockField = { id: "email", label: "Email", type: "text" };

  beforeEach(() => {
    (useForms as any).mockReturnValue({ forms: [] });
    (usePrefill as any).mockReturnValue({
      mappings: {},
      modalOpen: false,
      modalTargetFieldId: null,
      openModal: vi.fn(),
      closeModal: vi.fn(),
      setMapping: vi.fn(),
    });
  });

  it("renders the field label", () => {
    render(<PrefillFieldRow field={mockField} form={mockForm} />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
