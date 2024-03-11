import { expect, test } from "bun:test";

test("does it have same type", () =>
{
    expect( typeof("hello world") == 'string');
})
