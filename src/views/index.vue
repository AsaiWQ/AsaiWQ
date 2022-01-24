<template>
    <!-- 首页 -->
    <div class="index">
        <div class="index_top">
            <div class="index_top_t">
                <div class="time">
                    <span>9:41</span>
                </div>
                <div class="tig">
                    <i class="iconfont icon-phone-signal-full"></i>
                    <i class="iconfont icon-xinhao"></i>
                    <i class="iconfont icon-tubiao-dianchiman"></i>
                </div>
            </div>
            <div class="index_top_b">
                <div class="index_top_b_tig">
                    <span>中智移动办公系统</span>
                </div>
                <div class="index_top_b_rignt">
                    <img src="../../public/img/2.jpg" alt="" />
                    <span @click="toMycord()">李小白</span>
                </div>
            </div>
        </div>
        <div class="index_main">
            <div class="index_main_img">
                <img src="../../public/img/banner.png" alt="" />
            </div>
            <van-row class="van_row" type="flex">
                <van-col span="3" class="van-row-tig">置顶</van-col>
                <van-col span="10" offset="1">2021年春节放假通知！</van-col>
                <van-col span="3" offset="7" class="van-row-right">更多</van-col>
            </van-row>
            <van-swipe-cell class="index_main_bottom">
                <template>
                    <div class="main_template">
                        <div class="main_tig" @click="toTop()">
                            <van-badge>
                                <div class="badge">
                                    <i class="iconfont icon-yewu"></i>
                                    <span>综合事务</span>
                                </div>
                            </van-badge>
                        </div>
                        <div>
                            <van-badge>
                                <div class="badge" @click="toFavorites()">
                                    <i class="iconfont icon-wenjian"></i>
                                    <span>收藏文件</span>
                                </div>
                            </van-badge>
                        </div>
                        <div>
                            <van-badge>
                                <div class="badge" @click="toHandle()">
                                    <i class="iconfont icon-xinfeng"></i>
                                    <span>事务处理</span>
                                </div>
                            </van-badge>
                        </div>
                        <div>
                            <van-badge>
                                <div class="badge">
                                    <i class="iconfont icon-kaoqinguanli"></i>
                                    <span>考勤中心</span>
                                </div>
                            </van-badge>
                        </div>
                        <div class="main_tig">
                            <van-badge>
                                <div class="badge">
                                    <i class="iconfont icon-tongji"></i>
                                    <span>综合统计</span>
                                </div>
                            </van-badge>
                        </div>
                        <div class="main_tig">
                            <van-badge>
                                <div class="badge">
                                    <i class="iconfont icon-huiyi"></i>
                                    <span>会议通知</span>
                                </div>
                            </van-badge>
                        </div>
                        <div>
                            <van-badge :content="5" color="#EE6161">
                                <div class="badge" @click="toDynamic()">
                                    <i class="iconfont icon-xinxi"></i>
                                    <span>全局动态</span>
                                </div>
                            </van-badge>
                        </div>
                        <div>
                            <van-badge>
                                <div class="badge">
                                    <i class="iconfont icon-changyongxinxi"></i>
                                    <span>值班列表</span>
                                </div>
                            </van-badge>
                        </div>
                        <div>
                            <van-badge>
                                <div class="badge">
                                    <i class="iconfont icon-yewu" @click="tohistroy()"></i>
                                    <span>历史任务</span>
                                </div>
                            </van-badge>
                        </div>
                        <div class="main_tig">
                            <van-badge>
                                <div class="badge">
                                    <i class="iconfont icon-icon_yingjixinwen"></i>
                                    <span>新闻中心</span>
                                </div>
                            </van-badge>
                        </div>
                    </div>
                </template>
                <template #right>
                    <div>
                        <div class="main_template right">
                            <div>
                                <van-badge>
                                    <div class="badge">
                                        <i class="iconfont icon-diqiu"></i>
                                        <span>业务办理</span>
                                    </div>
                                </van-badge>
                            </div>
                            <div>
                                <van-badge>
                                    <div class="badge">
                                        <i class="iconfont icon-jiankang"></i>
                                        <span>业务办理</span>
                                    </div>
                                </van-badge>
                            </div>
                        </div>
                    </div>
                </template>
            </van-swipe-cell>
            <div class="van_slider">
                <div class="van_slider_box">
                    <div></div>
                </div>
            </div>
        </div>
        <div class="index_buttom">
            <div class="index_buttom-top">
                <span>待办事务</span>
            </div>
            <div class="index_buttom-body">
                <div>
                    <span class="tag-span span_tag"></span>
                    <span class="index_buttom_span">关于开展第二季度扫黑除恶专项斗争监督工作的通知</span>
                </div>
                <div class="index_buttom-b">
                    <span>局办公室符合发文登记</span>
                    <span>2020-01-11 10:00</span>
                </div>
            </div>
            <div class="index_buttom-body">
                <div>
                    <span class="tag-span"></span>
                    <span class="index_buttom_span">关于开展第二季度扫黑除恶专项斗争监督工作的通知</span>
                </div>
                <div class="index_buttom-b">
                    <span>局办公室符合发文登记</span>
                    <span>2020-01-11 10:00</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    methods: {
        //跳转我的个人中心
        toMycord() {
            this.$router.push("/mycord");
        },
        //跳转全局内容
        toDynamic() {
            this.$router.push("/dynamic");
        },
        //跳转综合事务
        toTop() {
            this.$router.push("/top");
        },
        //跳转历史事务
        tohistroy() {
            this.$router.push("/histroy");
        },
        //跳转收藏夹页面
        toFavorites() {
            this.$router.push("/favorites");
        },
        //跳转事务处理单页面
        toHandle() {
            this.$router.push("/handle");
        },
    },
};
</script>

<style lang='less' scoped>
@tag-font-size: 10px;
</style>
