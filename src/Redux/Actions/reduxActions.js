import { SRC_CHANGE } from "../Types/reduxTypes";

export const srcChange = (value) => {
    return {
        type : SRC_CHANGE,
        value
    };
};