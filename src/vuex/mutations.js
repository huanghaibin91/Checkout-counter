export default {
    // 添加新商品
    addShopping (state, newShopping) {
        state.shoppingList.push(newShopping);
    },
    // 添加新批次
    addShoppingBatch (state, obj) {
        state.shoppingList[obj.index].number = parseInt(state.shoppingList[obj.index].number) + parseInt(obj.batch.number);
        state.shoppingList[obj.index].date = obj.batch.date;
    },
    // 添加购物车商品
    addShoppingCart (state, shopping) {
        state.shoppingCartList.push(shopping);
    },
    // 删除购物车商品
    deleteShoppingCart (state, index) {
        state.shoppingCartList.splice(index, 1);
    }
}