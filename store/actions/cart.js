import * as actionTypes from './actionTypes';

export const openCart = () => {
	return {
		type: actionTypes.OPEN_CART,
	};
};

export const closeCart = () => {
	return {
		type: actionTypes.CLOSE_CART,
	};
};
