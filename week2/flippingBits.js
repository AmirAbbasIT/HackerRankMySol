function flippingBits(n) {
    const binary = n.toString(2).padStart(32,'0');
    const complement = binary.split('').map(x=> x === '0' ? '1' : '0').join('');
    return parseInt(complement,2);
}

//// convert a number into bse 32 and then flip all bits and convert back to base 2 ....