import { describe, expect, it } from "vitest"
import { ordinalSuffixDate, pluraliseString } from "../src/utils/utils"

describe( "ordinalSuffixDate", () => {
  it.each(
    [
      { date: 1, expected: "1st" },
      { date: 2, expected: "2nd" },
      { date: 3, expected: "3rd" },
      { date: 4, expected: "4th" },
      { date: 21, expected: "21st" },
      { date: 22, expected: "22nd" },
      { date: 23, expected: "23rd" },
      { date: 31, expected: "31st" },
    ]
  )( `returns $expected from $date`, ( { date, expected } ) => {
    expect( ordinalSuffixDate( date ) ).toStrictEqual( expected );
  } );
} );

describe( "pluraliseString", () => {
  it.each(
    [
      { str: "dog", expected: "dogs" },
      { str: "cat", expected: "cats" },
    ]
  )( `returns $expected from $str`, ( { str, expected } ) => {
    expect( pluraliseString( str ) ).toStrictEqual( expected );
  } );
} );