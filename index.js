/**
 * Given an array of unsorted numbers, return the
 * value of the nth smallest number.
 * 
 * Complexity is O(2n) -> O(n)
 * 
 * @param Array set An array of unosrted numbers. 
 * @param Number nth The nth smallest number to return. 
 * @return Number
 * @throws RangeError
 */
const getNthSmallestNumber = ( set, nth ) =>
{
    const orderedSet = [];
        
    // build the ordered set as a possibly sparse array
    for( let index = 0; index < set.length; ++index )
        orderedSet[ set[ index ] ] = true;

    // the index of the sparse array's nth item whose value is defined
    // is our nth!
    for( let index = 0; index < orderedSet.length; ++index )
    {

        if( orderedSet[ index ] !== undefined && --nth === 0 )
            return index;

    }

    // invalid/out-of-bounds nth
    throw new RangeError( 'The value of nth is out of bounds.' );
}

export { getNthSmallestNumber };