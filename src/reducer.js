export const initialState = {
    basket: [],
    user: null
};

//Selector
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [action.item, ...state.basket],
            }


        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1); // remove index on once (what to remove, number of times)
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
            }
            return {
                ...state,
                basket: newBasket
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user  // will update the new user
            }

        default:
            return state;
    }
};

export default reducer;