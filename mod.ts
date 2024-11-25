/**
 * This module contains list of Categories of ools and Utils
 * @module
 */
import ArraysTools from "./lib/Arrays/index.ts";

/** Object with all Tools and Utils categories */
const RitualTools = {
  /** {@link ArraysTools} Array Tools */
  Arrays: ArraysTools,
} as const;

export default RitualTools;
