<template>
    <!-- 收藏夹页面 -->
    <div class="option">
        <div class="dynamic_top">
            <div class="dynamic_top_t">
                <div class="time">
                    <span>9:41</span>
                </div>
                <div class="tig">
                    <i class="iconfont icon-phone-signal-full"></i>
                    <i class="iconfont icon-xinhao"></i>
                    <i class="iconfont icon-tubiao-dianchiman"></i>
                </div>
            </div>
            <div class="dynamic_top_m">
                <div @click="remove()">
                    <van-icon name="arrow-left" />
                    <span>收藏夹</span>
                </div>
                <div>
                    <i class="iconfont icon-fangwuxinxi Dicon"></i>
                </div>
            </div>
        </div>
        <div class="Atop_main">
            <van-search placeholder="请输入搜索关键词">
                <template #left-icon>
                    <i class="iconfont icon-sousuo"></i>
                </template>
            </van-search>

            <div class="Atop_main_box" v-for="(item, index) in maindata" :key="index">
                <div class="Atop_main_box_top">
                    <span v-show="item.flog == 1 ? true : false" class="Atop_main_box_dot"></span>
                    <span class="Atop_main_box_span">{{ item.top }}</span>
                </div>
                <div class="Atop_main_box_bottom">
                    <div>
                        <span>{{ item.spanone }}</span>
                    </div>
                    <div class="Atop_main_box_bottom_item">
                        <div>
                            <span>{{ item.spanthree }}</span>
                        </div>
                        <div>
                            <van-icon name="star" color="#689BEA" />
                            <span class="Atop_item" style="color: #689bea">已收藏</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Favorites",
    methods: {
        remove() {
            this.$router.push("/index");
        },
    },
    data() {
        return {
            maindata: [
                {
                    flog: 0,
                    top: "郴州市市局公文发文正文",
                    spanone: "类型：市局机关发文",
                    spanthree: "时间：2020-01-17",
                },
                {
                    flog: 0,
                    top: "郴州市市局公文发文正文",
                    spanone: "类型：市局机关发文",
                    spanthree: "时间：2020-01-17",
                },
                {
                    flog: 0,
                    top: "郴州市市局公文发文正文",
                    spanone: "类型：市局机关发文",
                    spanthree: "时间：2020-01-17",
                },
                {
                    flog: 0,
                    top: "郴州市市局公文发文正文",
                    spanone: "类型：市局机关发文",
                    spanthree: "时间：2020-01-17",
                },
                {
                    flog: 0,
                    top: "郴州市市局公文发文正文",
                    spanone: "类型：市局机关发文",
                    spanthree: "时间：2020-01-17",
                },
                {
                    flog: 0,
                    top: "郴州市市局公文发文正文",
                    spanone: "类型：市局机关发文",
                    spanthree: "时间：2020-01-17",
                },
            ],
        };
    },
};
</script>

<style>
</style>