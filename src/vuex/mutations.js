export default {
    // 商品入库部分
    // 添加新商品
    addShopping (state, newShopping) {
        state.shoppingList.push(newShopping);
    },
    // 添加新批次
    addShoppingBatch (state, obj) {
        state.shoppingList[obj.index].number = parseInt(state.shoppingList[obj.index].number) + parseInt(obj.batch.number);
        state.shoppingList[obj.index].date = obj.batch.date;
    },

    // 商品展示部分
    // 添加购物车商品
    addShoppingCart (state, shopping) {
        state.shoppingCartList.push(shopping);
        state.shoppingFlag.push(true);
        state.shoppingNumber.push(1);
    },

    // 购物车部分
    // 更改商品选中状态
    changeShoppingFlag (state, index) {
        state.shoppingFlag[index] = !state.shoppingFlag[index];
    },
    // 更改商品数量
    changeShoppingNumber (state, obj) {
        state.shoppingNumber[obj.index] = obj.num;
    },
    // 全选商品
    checkAllShopping (state) {
        for (let i = 0; i < state.shoppingFlag.length; i++) {
            state.shoppingFlag[i] = true;
        }
    },
    // 全不选商品
    uncheckAllShopping (state) {
        for (let i = 0; i < state.shoppingFlag.length; i++) {
            state.shoppingFlag[i] = false;
        }
    },
    // 删除购物车商品
    deleteShoppingCart (state, index) {
        state.shoppingCartList.splice(index, 1);
    }
}