export default {
    // 购物车中商品的种类
    shoppingCartListNumber (state) {
        return state.shoppingCartList.length;
    },
    // 购物车中选中商品的数量
    shoppingNumberTotal (state) {
        let total = 0;
        for (let i = 0; i < state.shoppingCartList.length; i++) {
            if (state.shoppingFlag[i] === true) {
                total += state.shoppingNumber[i];
            }
        }
        return total;
    },
    // 购物车中选中商品的总价
    shoppingPriceTotal (state) {
        let total = 0;
        for (let i = 0; i < state.shoppingCartList.length; i++) {
            if (state.shoppingFlag[i] === true) {
                total += (state.shoppingCartList[i].price * state.shoppingNumber[i]);
            }
        }
        return total.toFixed(1);
    },
    // 消息通知数量
    messageListNumber (state) {
        return state.messageList.length;
    },
}