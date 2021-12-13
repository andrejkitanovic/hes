import * as actionTypes from '../actions/actionTypes';

const initialState = {
	isOpen: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.OPEN_CART:
			return {
				...state,
				isOpen: true,
			};
		case actionTypes.CLOSE_CART:
			return {
				...state,
				isOpen: false,
			};
		default:
			return state;
	}
};

export default reducer;
