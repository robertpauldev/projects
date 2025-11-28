import { describe, test, expect } from "@jest/globals";
import { slugifyString } from "../src/utils/utils";

describe( "slugifyString", () => {
  test( "Test", () => {
    expect( slugifyString( "Hello World" ) ).toStrictEqual( "hello-world" )
  } );
} );