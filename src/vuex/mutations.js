export default {
    // 添加新商品
    addShopping (state, newShopping) {
        state.shoppingList.push(newShopping);
    },
    // 添加新批次
    addShoppingBatch (state, obj) {
        state.shoppingList[obj.index].batchArray.push(obj.batch);
    }
}