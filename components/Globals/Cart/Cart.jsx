import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { closeCart } from '../../../store/actions';

export default function Cart({ overlayTransition, cartTransition }) {
	const dispatch = useDispatch();
	const { isOpen } = useSelector((state) => state.cart);
	
	return (
		<>
			<AnimatePresence exitBeforeEnter>
				{isOpen && (
					<motion.div
						className="cart__overlay"
						onClick={() => dispatch(closeCart())}
						key="cart-overlay"
						{...overlayTransition}
					></motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence exitBeforeEnter>
				{isOpen && (
					<motion.div key="cart" className="cart" {...cartTransition}>
						<div className="cart__header"></div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
