import { SHA256 } from "crypto-js";

export const buildHash = (block) => {
    return SHA256(
        ...block
    ).toString()
}