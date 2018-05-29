import { SIGN_IN } from "./types";

export function signIn(user) {
    return {
        type: SIGN_IN,
        user
    };
}