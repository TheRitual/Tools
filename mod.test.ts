import { assertEquals } from "@std/assert";
import RitualTools from "./mod.ts";

  const keys = Object.keys(RitualTools).sort();
Deno.test(function RTObjectLength() {
  const RTLength = keys.length;
  assertEquals(RTLength, 1);
});

Deno.test(function RTObjectKeys(){
  assertEquals(keys[0], "Arrays")
})
