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

const resultOffset = rangeArray({ start: -3, end: 2 });

Deno.test(function RangeArrayLengthOffset() {
  assertEquals(resultOffset.length, 6);
});

Deno.test(function RangeArrayValuesOffset() {
  assertEquals(resultOffset[0], -3);
  assertEquals(resultOffset[1], -2);
  assertEquals(resultOffset[2], -1);
  assertEquals(resultOffset[3], 0);
  assertEquals(resultOffset[4], 1);
  assertEquals(resultOffset[5], 2);
});

const resultStep = rangeArray({ end: 7, start: 5, step: 0.6 });

Deno.test(function RangeArrayLengthStep() {
  assertEquals(resultStep.length, 4);
});

Deno.test(function RangeArrayValuesStep() {
  assertEquals(resultStep[0], 5);
  assertEquals(resultStep[1], 5.6);
  assertEquals(resultStep[2], 6.2);
  assertEquals(resultStep[3], 6.8);
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

const resultStepNeg = rangeArray({
  start: 1,
  end: -3,
  step: 0.6,
});

Deno.test(function RangeArrayLengthStepNeg() {
  assertEquals(resultStepNeg.length, 7);
});

Deno.test(function RangeArrayValuesStepNeg() {
  assertEquals(resultStepNeg[0], 1);
  assertEquals(resultStepNeg[1], 0.4);
  assertEquals(resultStepNeg[2], -0.2);
  assertEquals(resultStepNeg[3], -0.8);
  assertEquals(resultStepNeg[4], -1.4);
  assertEquals(resultStepNeg[5], -2.0);
  assertEquals(resultStepNeg[6], -2.6);
});
