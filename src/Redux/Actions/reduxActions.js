import { SRC_CHANGE } from "../Types/reduxTypes";

export const srcChange = (number,id) => {
    return {
        type : SRC_CHANGE,
        number,
        id
    };
};