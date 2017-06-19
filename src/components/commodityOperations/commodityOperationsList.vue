<template>
    <div class="list">
        <p>{{ getShopping.coding }}</p>
        <p>
            <input :value="getShopping.name" :class="{ isName: !nameFlag }" :disabled="nameFlag" @blur="trueNameFlag" />
            <a href="javascript:;" @click="falseNameFlag"></a>
        </p>
        <p>
            <input :value="getShopping.price" :class="{ isPrice: !priceFlag }" :disabled="priceFlag" @blur="truePriceFlag" />
            <a href="javascript:;" @click="falsePriceFlag"></a>
        </p>
        <p>
            <input :value="getShopping.number" :class="{ isNumber: !numberFlag }" :disabled="numberFlag" @blur="trueNumberFlag" />
            <a href="javascript:;" @click="falseNumberFlag"></a>
        </p>
        <p>{{ getShopping.date }}</p>
        <p>
            <button @click="deleteShopping(getShopping)"></button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "commodityOperationsList",
        props: ['getShopping'],
        data () {
            return {
                nameFlag: true,
                priceFlag: true,
                numberFlag: true,
            }
        },
        methods: {
            // 切换input的可否编辑,并修改商品属性
            falseNameFlag (e) {
                this.nameFlag = !this.nameFlag;
            },
            trueNameFlag (e) {
                this.nameFlag = true;
                let obj = new Object();
                obj.shopping = this.getShopping;
                obj.message = e.target.value;
                this.$store.commit('changeShoppingName', obj);
            },
            falsePriceFlag () {
                this.priceFlag = !this.priceFlag;
            },
            truePriceFlag (e) {
                this.priceFlag = true;
                let price = e.target.value;
                let reg = /^(\d+\.\d{1,1}|\d+)$/g;
                if (reg.test(price)) {
                    let obj = new Object();
                    obj.shopping = this.getShopping;
                    obj.message = price;
                    this.$store.commit('changeShoppingPrice', obj);
                } else {
                    alert('商品价格是最多一位小数的数字');
                }
            },
            falseNumberFlag () {
                this.numberFlag = !this.numberFlag;
            },
            trueNumberFlag (e) {
                this.numberFlag = true;
                let number = e.target.value;
                let reg = /^[1-9]\d*$/g;
                if (reg.test(number)) {
                    let obj = new Object();
                    obj.shopping = this.getShopping;
                    obj.message = number;
                    this.$store.commit('changeShoppingNumber', obj);
                } else {
                    alert('商品数量为数字');
                }
            },
            // 删除商品
            deleteShopping (shopping) {
                this.$store.commit('deleteShopping', shopping);
            }
        },
    }
</script>

<style lang="scss">
    
</style>
            
