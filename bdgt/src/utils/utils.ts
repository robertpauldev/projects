/**
 * Returns the given date with its ordinal suffix,
 * e.g. 1st / 2nd / 3rd / 4th.
 * @param date The date expressed as a number
 * @returns 
 */
const ordinalSuffixDate = ( date: number ) => {
  switch ( date ) {
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return `${ date }th`;
  }
}

export { ordinalSuffixDate };