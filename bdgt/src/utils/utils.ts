/**
 * Returns the given date with its ordinal suffix,
 * e.g. 1st / 2nd / 3rd / 4th.
 * @param date The date expressed as a number
 * @returns string|null
 */
const ordinalSuffixDate = ( date: number | unknown ) => {

  if ( typeof date !== "number" ) {
    return;
  }

  if ( [ 1, 21, 31 ].includes( date ) ) {
    return `${ date }st`;
  }

  if ( [ 2, 22 ].includes( date ) ) {
    return `${ date }nd`;
  }

  if ( [ 3, 23 ].includes( date ) ) {
    return `${ date }rd`;
  }

  return `${ date }th`;
}

/**
 * Returns a simple pluralised string, e.g. `beer` -> `beers`
 * @param str The input string
 * @returns 
 */
const pluraliseString = ( str: string ) => {
  return `${ str }s`;
}

export { ordinalSuffixDate, pluraliseString };