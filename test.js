require = require( 'esm' )( module /*, options*/ );

const assert = require( 'assert' );
const { getNthSmallestNumber } = require( './index.js' );

it( 'passes', () =>
{
    // 1, 6, 3, 9, 8, 5 => 1, 3, 5, 6, 8, 9
    const test = [ 1, 6, 3, 9, 8, 5 ];

    assert.equal( getNthSmallestNumber( test, 1 ), 1 );
    assert.equal( getNthSmallestNumber( test, 2 ), 3 );
    assert.equal( getNthSmallestNumber( test, 3 ), 5 );
    assert.equal( getNthSmallestNumber( test, 4 ), 6 );
    assert.equal( getNthSmallestNumber( test, 5 ), 8 );
    assert.equal( getNthSmallestNumber( test, 6 ), 9 );

    assert.throws( () => { getNthSmallestNumber( test, 0 ) }, RangeError );
    assert.throws( () => { getNthSmallestNumber( test, 7 ) }, RangeError );

});
