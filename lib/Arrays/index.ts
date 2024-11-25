/** Arrays Tools and Utils collection
 * This module contains list of all Arrays Tools and Utils
 */
import rangeArray, {numArray, arrayUpTo} from "./rangeArray/index.ts";

/** Object with all Array Tools and Utils */
const ArraysTools = {
  /** {@link rangeArray} Create range  numeric array functions */
  arrayUpTo,
  numArray,
  rangeArray,
} as const;

export {
  /** rangeArray function {@link rangeArray}
   * @function rangeArray  Create range  numeric array functions
   * */
  arrayUpTo,
  numArray,
  rangeArray,
};

export default ArraysTools;
