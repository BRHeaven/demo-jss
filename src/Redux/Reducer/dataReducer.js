import data from '../../Data/minData.json';
const stateData = {
    dataObject : data.artImage
};
const dataReducer = ( state = stateData, action ) => {
    switch ( action.type ) {
        case 1: ;break;
        default: ;break;
    };
    return {...state};
};
export default dataReducer;