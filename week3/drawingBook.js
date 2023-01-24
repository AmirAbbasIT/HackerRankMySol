function pageCount(n, p) {
    let frontTurns = Math.floor(p / 2)
    let backTurns = Math.ceil((n - p - (n % 2)) / 2)
    return frontTurns > backTurns ? backTurns : frontTurns

}