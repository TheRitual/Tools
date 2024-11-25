import { assertEquals } from "@std/assert";
import ArraysTools from "./index.ts";

const keys = Object.keys(ArraysTools).sort();

Deno.test(function ArraysObjectLength() {
  const RTLength = keys.length;
  assertEquals(RTLength, 3);
});

Deno.test(function ArraysObjectKeys() {
  assertEquals(keys.includes("rangeArray"), true);
  assertEquals(keys.includes("arrayUpTo"), true);
  assertEquals(keys.includes("numArray"), true);
});
