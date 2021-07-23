export const CLICK_SQUARE = "CLICK_SQUARE";

export function clickSquare(payload) {
    return { type: CLICK_SQUARE, payload };
}

export const JUMP_TO_PAST = "JUMP_TO_PAST";

export function jumpToPast(payload) {
    return { type: JUMP_TO_PAST, payload }
}

export const GET_HISTORY = "GET_HISTORY";

export function getHistory(payload) {
    return { type: GET_HISTORY, payload }
}
