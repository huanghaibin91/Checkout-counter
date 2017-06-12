// 模块引入vue就可以使用vue的方法
// import Vue from 'vue' 

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
        // 用索引直接更改数组值，vue不会重新渲染
        // state.shoppingFlag[index] = !state.shoppingFlag[index];
        state.shoppingFlag.splice(index, 1, !state.shoppingFlag[index]);
    },
    // 更改商品数量
    changeShoppingCartNumber (state, obj) {
        // 用索引直接更改数组值，vue不会重新渲染
        // state.shoppingNumber[obj.index] = obj.num;
        //  两种方法解决，变异方法，数组调用改变原数组的方法
        state.shoppingNumber.splice(obj.index, 1, obj.num);
        // 第二种，使用vue的set，需要在模块中引入vue
        // Vue.set(state.shoppingNumber, obj.index, obj.num);
    },
    // 更改全选状体
    changeCheckAll (state) {
        state.checkAllFlag = !state.checkAllFlag; 
    },
    // 全选商品
    checkAllShopping (state) {
        for (let i = 0; i < state.shoppingFlag.length; i++) {
            state.shoppingFlag[i] = true;
        }
        state.shoppingFlag.splice(0, state.shoppingFlag.length, ...state.shoppingFlag);
    },
    // 全不选商品
    uncheckAllShopping (state) {
        for (let i = 0; i < state.shoppingFlag.length; i++) {
            state.shoppingFlag[i] = false;
        }
        state.shoppingFlag.splice(0, state.shoppingFlag.length, ...state.shoppingFlag);
    },
    // 删除购物车商品
    deleteShoppingCart (state, index) {
        state.shoppingCartList.splice(index, 1);
        state.shoppingFlag.splice(index, 1);
        state.shoppingNumber.splice(index, 1);
    },

    // 商品操作部分
    // 更改商品名称
    changeShoppingName (state, obj) {
        state.shoppingList[obj.index].name = obj.message;
    },
    // 更改商品价格
    changeShoppingPrice (state, obj) {
        state.shoppingList[obj.index].price = obj.message;
    },
    // 更改商品数量
    changeShoppingNumber (state, obj) {
        state.shoppingList[obj.index].number = obj.message;
    },  
    // 删除商品
    deleteShopping (state, obj) {
        state.shoppingList.splice(obj.index, 1);
    },
}