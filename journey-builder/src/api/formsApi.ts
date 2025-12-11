import { mockGraph } from "./mockServer";
import { FormGraphResponse } from "../types/graph";

/**
 * Simulate fetching the form graph from an external API.
 * In a real implementation you could call the Avantos API here.
 */
export function fetchForms(): Promise<FormGraphResponse> {
  return new Promise((resolve) => {
    // Simulate network latency with a timeout.
    setTimeout(() => {
      resolve(mockGraph);
    }, 400);
  });
}
