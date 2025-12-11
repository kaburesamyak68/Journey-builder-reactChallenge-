import { getUpstreamForms } from "../utils/graphUtils";
import { FormNode } from "../types/graph";

const forms: FormNode[] = [
  { id: "A", name: "A", fields: [], parents: [], children: ["B"] },
  { id: "B", name: "B", fields: [], parents: ["A"], children: ["C"] },
  { id: "C", name: "C", fields: [], parents: ["B"], children: [] },
];

describe("getUpstreamForms", () => {
  it("returns all upstream forms for a given form id", () => {
    const upstream = getUpstreamForms(forms, "C");
    expect(upstream.map((f) => f.id)).toEqual(["B", "A"]);
  });
  it("returns an empty array when no parents exist", () => {
    const upstream = getUpstreamForms(forms, "A");
    expect(upstream).toEqual([]);
  });
});
