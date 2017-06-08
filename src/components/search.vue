<template>
    <div class="search">
        <div class="search-input">
            <input type="text" placeholder="输入商品名称或编码查询" />
        </div>
        <div class="shopping-btn">
            <button><img src="../assets/image/shopping-cart.png" /><span>购物车</span><span v-if="shoppingCartListNumberFlag">{{ shoppingCartListNumber }}</span></button>
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        name: 'search',
        data () {
            return {
                shoppingCartListNumberFlag: true,
            }
        },
        watch: {
            shoppingCartListNumber: function (val) {
                if (val === 0) {
                    return this.shoppingCartListNumberFlag = false;
                } else {
                    return this.shoppingCartListNumberFlag = true;
                }
            },
        },
        computed: {
            ...mapGetters([
                'shoppingCartListNumber',
            ]),
        },
    }
</script>

<style lang="scss">
    .search {
        width: 900px;
        height: 100%;
        display: flex;
        .search-input, .shopping-btn, .shopping-btn button {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .search-input {
            width: 600px;
            height: 100%;
            input {
                height: 32px;
                width: 500px;
                padding-left: 40px;
                border: 2px solid #333;
                background: url("../assets/image/search.png") no-repeat left center;
            }
        }
        .shopping-btn {
            width: 300px;
            height: 100%;
            button {
                width: 150px;
                height: 38px;
                border: 2px solid #333;
                background: white;
                span:nth-child(2) {
                    padding: 0 10px;
                }
                span:nth-child(3) {
                    width: 30px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    border-radius: 50%;
                    background: #ff2e63;
                    color: white;
                }
                &:hover {
                    
                }
            }
        }
    }
</style>
