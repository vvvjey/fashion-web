const actionTypes = Object.freeze({
    // USER
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT",

    LOGIN_SUCCESS:"LOGIN_SUCCESS",
    LOGIN_FAIL:"LOGIN_FAIL",

    REGISTER:"REGISTER",
    REGISTER_FAIL:"REGISTER_FAIL",


    LOGOUT:"LOGOUT",

    SET_IS_LOGIN:"SET_IS_LOGIN",

    GET_CART:"GET_CART",
    MODIFY_PRODUCT_QUANTITY_IN_CART:"MODIFY_PRODUCT_QUANTITY_IN_CART",
    DELETE_PRODUCT_IN_CART:"DELETE_PRODUCT_IN_CART",

    CREATE_ORDER:"CREATE_ORDER",
    // ADMIN
    ADMIN_LOGIN_SUCCESS:"ADMIN_LOGIN_SUCCESS",
    ADMIN_LOGIN_FAIL:"ADMIN_LOGIN_FAIL",

    ADMIN_LOGOUT:"ADMIN_LOGOUT"
})
export default actionTypes;