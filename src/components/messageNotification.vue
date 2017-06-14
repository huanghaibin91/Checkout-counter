<template>
    <div class="message-notification">
        <div class="message-notification-title">
            <p>消息通知</p>
            <div>
                <button>消息设置</button>
                <form>
                    <label>保质期提醒时限<input /></label>
                    <label>库存提醒数量<input /></label>
                </form>
            </div>
        </div>
        <div>
            <p>商品编码00000000，名称限定型黑猫保质期至2017-10-2，还剩21天,请尽快销售！</p>
            <button>删除消息</button>
        </div>
        <div>
            <p>商品编码00000000，名称限定型黑猫库存仅剩1份，请尽快补充！</p>
            <button>删除消息</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'messageNotification',
    }
</script>

<style lang="scss">
    .message-notification {
        width: 1000px;
        margin: 50px auto;
        >p {
            border-left: 5px solid aqua;
            text-indent: 1em;
            font-size: 20px;
            font-weight: bold;
        }
    }
</style>
