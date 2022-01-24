<template>
    <!-- 待阅页面 -->
    <div>
        <div class="Atop_main-top" v-show="flog == 0 ? true : false">
            <span>请点击选择勾选框</span>
            <van-icon name="cross" class="Atop_main-top-icon" />
        </div>
        <div class="Atop_main">
            <van-search placeholder="请输入搜索关键词">
                <template #left-icon>
                    <i class="iconfont icon-sousuo"></i>
                </template>
            </van-search>
            <van-checkbox-group v-model="result">
                <div class="Atop_main_box" v-for="(item, index) in maindata" :key="index">
                    <div class="Atop_main_box_top" @click="toggle(index)">
                        <van-checkbox :name="index" ref="checkboxes" v-show="flog == 0 ? true : false"></van-checkbox>
                        <span v-show="item.flog == 1 ? true : false" class="Atop_main_box_dot"></span>
                        <span class="Atop_main_box_span">{{ item.top }}</span>
                    </div>
                    <div class="Atop_main_box_bottom">
                        <div>
                            <span>{{ item.spanone }}</span>
                        </div>
                        <div>
                            <span>{{ item.spantwo }}</span>
                        </div>
                        <div class="Atop_main_box_bottom_item">
                            <div>
                                <span>{{ item.spanthree }}</span>
                            </div>
                            <div v-show="item.show" @click="shows(item)">
                                <van-icon name="star-o" />
                                <span class="Atop_item">收藏</span>
                            </div>
                            <div v-show="!item.show" @click="shows(item)">
                                <van-icon name="star" color="#689BEA" />
                                <span class="Atop_item" style="color: #689bea">已收藏</span>
                            </div>
                        </div>
                    </div>
                </div>
            </van-checkbox-group>

            <div class="Atop_tig" v-show="flog == 1 ? true : false">
                <div class="Atop_tig_one" @click="moresubmit()">
                    <span>批量提交</span>
                </div>
            </div>
            <div class="Atop_tig" v-show="flog == 0 ? true : false">
                <div class="Atop_tig_two" @click="cancel()">
                    <span>取消</span>
                </div>
                <div class="Atop_tig_one" @click="submit()">
                    <span>提交</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Wait",
    data() {
        return {
            //控制是否显示多选框
            flog: "1",
            //多选框接收数组
            result: [],
            maindata: [
                {
                    flog: 1,
                    top: "郴州市市局公文发文正文郴州市市局公文发文正文郴州市市局公文发文正文",
                    spanone: "类型:市局机关发文",
                    spantwo: "环节:局办公室复核发文登记",
                    spanthree: "时间:2020-01-17",
                    show: true,
                },
                {
                    flog: 1,
                    top: "郴州市市局公文发文正文郴州市市局公文发文正文郴州市市局公文发文正文",
                    spanone: "类型:市局机关发文",
                    spantwo: "环节:局办公室复核发文登记",
                    spanthree: "时间:2020-01-17",
                    show: true,
                },
                {
                    flog: 0,
                    top: "郴州市市局公文发文正文郴州市市局公文发文正文郴州市市局公文发文正文",
                    spanone: "类型:市局机关发文",
                    spantwo: "环节:局办公室复核发文登记",
                    spanthree: "时间:2020-01-17",
                    show: true,
                },
                {
                    flog: 0,
                    top: "郴州市市局公文发文正文郴州市市局公文发文正文郴州市市局公文发文正文",
                    spanone: "类型:市局机关发文",
                    spantwo: "环节:局办公室复核发文登记",
                    spanthree: "时间:2020-01-17",
                    show: true,
                },
            ],
        };
    },
    created() {
        this.$bus.$emit(
            "routers",
            this.$route.query.q,
            this.$route.query.y,
            this.$route.query.x
        );
    },
    methods: {
        //控制更多提交按钮的显示
        moresubmit() {
            this.flog = "0";
        },
        //清空选中的多选框
        cancel() {
            //清空选中的多选框
            this.result = undefined;
            this.flog = "1";
        },
        //检测提交按钮是否选中了多选框
        submit() {
            if (this.result == undefined || this.result.length <= 0) {
                this.$notify("请点击选择框勾选");
            } else {
                this.$router.push({
                    path: "/top/circulate",
                    query: {
                        q: 0,
                        y: 0,
                        x: 1,
                    },
                });
            }
        },
        //多选框的选中方法
        toggle(index) {
            this.$refs.checkboxes[index].toggle();
        },
        //显示收藏与取消收藏
        shows(item) {
            item.show = !item.show;
        },
    },
};
</script>

<style scoped>
</style>