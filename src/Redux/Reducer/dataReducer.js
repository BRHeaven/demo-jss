/* eslint-disable no-unreachable */
import data from '../../Data/minData.json';
import { SRC_CHANGE } from '../Types/reduxTypes';
const stateData = {
    dataObject : data.artImage
};
const dataReducer = ( state = stateData, action ) => {
    switch ( action.type ) {
        case SRC_CHANGE: 
        let updateReducer = state.dataObject;
        let index = updateReducer.findIndex(object => object.id === action.id);
        if (index !== -1) {
            if (action.number === 1) {
                updateReducer[index].src = state.dataObject[index].src1;
            } else if (action.number === 2) {
                updateReducer[index].src = state.dataObject[index].src2;
            } else {
                updateReducer[index].src = state.dataObject[index].src3;
            }
        }
        state.dataObject = updateReducer;
        console.log(state.dataObject[index]);
        return {...state};
        ;break;
        default: ;break;
    };
    return {...state};
};
export default dataReducer;