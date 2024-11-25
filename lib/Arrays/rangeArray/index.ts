/**
 * @interface RangeArrayArgs
 * Arguments for rangeArray function
 */
export interface RangeArrayArgs {
  /** @param end - End of range */
  end: number;
  /** @param start - Start of range */
  start?: number;
  /** @param step - step between numbers *
   * if numbers are decreasing step will automaticly be
   * transformed to negative number and if it is incrising
   * it will be transformed to positive number
   */
  step?: number;
}

/** creating array with  numbers in specific range and step
 * @function RangeArray {@link rangeArray}
 * @param end Sets last included element within range
 * @param start Sets first element included within range
 * @param step Sets step between number
 * @returns array filled with numbers within
 * pecific range and step
 */
const rangeArray = ({
  /** @param end - End of range */
  end,
  /** @param start - Start of range */
  start = 0,
  /** @param step - step between numbers *
   * if numbers are decreasing step will automaticly be
   * transformed to negative number and if it is incrising
   * it will be transformed to positive number
   */
  step = 1,
}: RangeArrayArgs): number[] => {
  const length = Math.abs(Math.ceil((end - start) / step)) + 1;
  const realStep = end > start ? Math.abs(step) : -Math.abs(step);
  const result = new Array(length)
    .fill(null)
    .map((_, i) => start + i * realStep);
  return result;
};

export default rangeArray;
