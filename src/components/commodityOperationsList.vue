<template>
    <div class="list">
        <p>{{ getShopping.coding }}</p>
        <p>
            <input :value="getShopping.name" :class="{ isName: !nameFlag }" :disabled="nameFlag" @blur="trueNameFlag" />
            <a href="#" @click="falseNameFlag"></a>
        </p>
        <p>
            <input :value="getShopping.price" :class="{ isPrice: !priceFlag }" :disabled="priceFlag" @blur="truePriceFlag" />
            <a href="#" @click="falsePriceFlag"></a>
        </p>
        <p>
            <input :value="getShopping.number" :class="{ isNumber: !numberFlag }" :disabled="numberFlag" @blur="trueNumberFlag" />
            <a href="#" @click="falseNumberFlag"></a>
        </p>
        <p>{{ getShopping.date }}</p>
        <p>
            <button @click="deleteShopping(getIndex)"></button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "commodityOperationsList",
        props: ['getShopping', 'getIndex'],
        data () {
            return {
                nameFlag: true,
                priceFlag: true,
                numberFlag: true,
            }
        },
        methods: {
            // 切换input的可否编辑,并修改商品属性
            falseNameFlag () {
                this.nameFlag = false;
            },
            trueNameFlag (e) {
                this.nameFlag = true;
                let obj = new Object();
                obj.index = this.getIndex;
                obj.message = e.target.value;
                this.$store.commit('changeShoppingName', obj);
            },
            falsePriceFlag () {
                this.priceFlag = false;
            },
            truePriceFlag (e) {
                this.priceFlag = true;
                let obj = new Object();
                obj.index = this.getIndex;
                obj.message = e.target.value;
                this.$store.commit('changeShoppingPrice', obj);
            },
            falseNumberFlag () {
                this.numberFlag = false;
            },
            trueNumberFlag (e) {
                this.numberFlag = true;
                let obj = new Object();
                obj.index = this.getIndex;
                obj.message = e.target.value;
                this.$store.commit('changeShoppingNumber', obj);
            },
            // 删除商品
            deleteShopping (index) {
                this.$store.commit('deleteShopping', index);
            }
        },
    }
</script>

<style>

</style>
