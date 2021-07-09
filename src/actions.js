export const CLICK_SQUARE = "CLICK_SQUARE";

export function clickSquare(index) {
    return { type: CLICK_SQUARE, index };
}

export const JUMP_TO_PAST = "JUMP_TO_PAST";

export function jumpToPast(index) {
    return { type: JUMP_TO_PAST, index }
}
