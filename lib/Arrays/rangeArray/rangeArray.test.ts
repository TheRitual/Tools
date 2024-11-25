import { assertEquals } from "@std/assert";
import rangeArray from "./index.ts";

const result = rangeArray({ end: 3 });

Deno.test(function RangeArrayLength() {
  assertEquals(result.length, 4);
});

Deno.test(function RangeArrayValues() {
  assertEquals(result[0], 0);
  assertEquals(result[1], 1);
  assertEquals(result[2], 2);
  assertEquals(result[3], 3);
});

const resultOffset = rangeArray({ end: 5, start: 1 });

Deno.test(function RangeArrayLengthOffset() {
  assertEquals(resultOffset.length, 5);
});

Deno.test(function RangeArrayValuesOffset() {
  assertEquals(resultOffset[0], 1);
  assertEquals(resultOffset[1], 2);
  assertEquals(resultOffset[2], 3);
  assertEquals(resultOffset[3], 4);
  assertEquals(resultOffset[4], 5);
});

const resultStep = rangeArray({ end: 4.5, start: 2, step: 0.5 });

Deno.test(function RangeArrayLengthStep() {
  assertEquals(resultStep.length, 6);
});

Deno.test(function RangeArrayValuesStep() {
  assertEquals(resultStep[0], 2);
  assertEquals(resultStep[1], 2.5);
  assertEquals(resultStep[2], 3);
  assertEquals(resultStep[3], 3.5);
  assertEquals(resultStep[4], 4);
  assertEquals(resultStep[5], 4.5);
});

const resultNeg = rangeArray({ end: -3 });

Deno.test(function RangeArrayLengthNeg() {
  assertEquals(resultNeg.length, 4);
});

Deno.test(function RangeArrayValuesNeg() {
  assertEquals(resultNeg[0], 0);
  assertEquals(resultNeg[1], -1);
  assertEquals(resultNeg[2], -2);
  assertEquals(resultNeg[3], -3);
});
