import { assertEquals } from "@std/assert";
import ArraysTools from "./index.ts";

const keys = Object.keys(ArraysTools).sort();

Deno.test(function ArraysObjectLength() {
  const RTLength = keys.length;
  assertEquals(RTLength, 1);
});

Deno.test(function ArraysObjectKeys() {
  assertEquals(keys[0], "rangeArray");
});
