/**
 * Returns the given date with its ordinal suffix,
 * e.g. 1st / 2nd / 3rd / 4th.
 * @param date The date expressed as a number
 * @returns 
 */
const ordinalSuffixDate = ( date: number | unknown ) => {

  if ( date === 1 || date === 21 || date === 31 ) {
    return `${ date }st`;
  }

  if ( date === 2 || date === 22 ) {
    return `${ date }nd`;
  }

  if ( date === 3 || date == 23 ) {
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