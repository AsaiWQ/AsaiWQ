<template>
    <!-- 意见填写子页面 -->
    <div class="option">
        <div class="option_main">
            <div class="option_box">
                <span>第一步：填写意见</span>
            </div>

            <van-cell-group inset disabled>
                <van-cell is-link>
                    <template #title>
                        <span class="option_title">习惯用语</span>
                    </template>
                </van-cell>
                <van-field label="备注" v-model="value" :disabled="files" @blur="fields()" />
            </van-cell-group>
            <div class="option_box">
                <span>第二步：选择环节</span>
            </div>
            <van-cell-group inset>
                <div class="group-title">
                    <span>环节列表</span>
                    <span style="color: #689bea">（3）</span>
                </div>
                <div>
                    <ul class="option_ul">
                        <li>
                            <div class="li_box">
                                <span>相关科室会签</span>
                                <van-radio-group v-model="radio" :disabled="radios">
                                    <van-radio name="1" @click="optionRadio()"></van-radio>
                                </van-radio-group>
                            </div>
                            <div class="li_box boxtwo">
                                <span>主任审核</span>
                                <van-radio-group v-model="radio" :disabled="radios">
                                    <van-radio name="2" @click="optionRadio()"></van-radio>
                                </van-radio-group>
                            </div>
                        </li>
                        <li>
                            <div class="li_box">
                                <span>维护处理</span>
                                <van-radio-group v-model="radio" :disabled="radios">
                                    <van-radio name="3" @click="optionRadio()"></van-radio>
                                </van-radio-group>
                            </div>
                        </li>
                    </ul>
                </div>
            </van-cell-group>
            <div class="option_box">
                <span>第三步：选择人员</span>
            </div>
            <!-- @change='changeBox()' -->
            <van-checkbox-group inset v-model="result" ref="checkboxGroup" :disabled="checked">
                <div class="group-title">
                    <span>人员列表</span>
                    <span style="color: #689bea">（30）</span>
                    <van-checkbox v-model='isAllChecked' @click="checkAll()" class="checkbox-right" ref='checkboxs' :disabled="checked">全选</van-checkbox>
                </div>
                <div @click="actives()">
                    <ul class="option_ul ul_li">
                        <li>
                            <div class="li_box boxthree" v-for="(item, index) in optiondata" :key="index">
                                <span>{{ item.name }}</span>
                                <van-checkbox v-model='item.isChecked' @click="toggle(item)" ref="checkboxes" :name="index" :disabled="checked"></van-checkbox>
                            </div>
                        </li>
                    </ul>
                </div>
            </van-checkbox-group>
        </div>

        <div class="option-buttom">
            <van-button plain color="#999999" @click="toHandle()">取消</van-button>
            <van-button color="#EE6161" @click="toConfirm()">提交</van-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Option",
    data() {
        return {
            //进度条控制
            active: 0,
            //控制单选框的禁用
            radios: true,
            //控制文本框的禁用
            files: false,
            checked: true,
            //控制全选
            flog: 1,
            //文本内容
            value: "",
            //单选按钮
            radio: ["1", "2", "3"],
            //复选框数组
            result: [],
            //第三步数据
            optiondata: [
                {
                    name: "李武一",
                    isChecked: "",
                },
                {
                    name: "李武一",
                    isChecked: "",
                },
                {
                    name: "李武一",
                    isChecked: "",
                },
                {
                    name: "李武一",
                    isChecked: "",
                },
                {
                    name: "李武一",
                    isChecked: "",
                },
                {
                    name: "李武一",
                    isChecked: "",
                },
                {
                    name: "李武一",
                    isChecked: "",
                },
                {
                    name: "李武一",
                    isChecked: "",
                },
                {
                    name: "李武一",
                    isChecked: "",
                },
                {
                    name: "李武一",
                    isChecked: "",
                },
                {
                    name: "李武一",
                    isChecked: "",
                },
                {
                    name: "李武一",
                    isChecked: "",
                },
            ],
        };
    },
    // watch: {
    //     // 监听数据的变化
    //     result: function () {
    //         if (this.result.length - 1 == 12) {
    //             this.$refs.checkboxs.toggle(true);
    //             console.log(1111);
    //         } else {
    //             this.$refs.checkboxs.toggle(false);
    //         }

    //         // console.log(this.$refs.checkboxs.toggle(true));
    //     },
    // },

    // watch: {
    //     isAllChecked: function () {
    //         var num = 0;
    //         for (let i = 0; i < this.optiondata.length; i++) {
    //             if (this.optiondata[i].isChecked == true) {
    //                 num++;
    //             } else {
    //                 this.$refs.checkboxs.toggle(false);
    //             }
    //             if (num == this.optiondata.length) {
    //                 this.$refs.checkboxs.toggle(true);
    //             }
    //         }
    //     },
    // },
    computed: {
        isAllChecked: {
            get() {
                return this.optiondata.every((ele) => {
                    ele.isChecked;
                    console.log(ele.isChecked);
                });
            },
            set(value) {
                this.optiondata.map((ele) => {
                    ele.isChecked = value;
                });
            },
            // return function () {
            //     var num = 0;
            //     for (let i = 0; i < this.optiondata.length; i++) {
            //         if (this.optiondata[i].isChecked == true) {
            //             num++;
            //         }
            //         if (num == this.optiondata.length) {
            //             this.$refs.checkboxs.toggle(true);
            //         } else {
            //             this.$refs.checkboxs.toggle(false);
            //         }
            //     }
            // };
            // this.$refs.checkboxs.toggle(true);
        },
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            this.optiondata.forEach((ele) => {
                ele.isChecked = true;
            });
        },
        //文本失去焦点 步骤条+1
        fields() {
            this.files = true;
            this.radios = false;
            this.$bus.$emit("avtives", 1);
        },
        //控制步骤条
        optionRadio() {
            if (this.active == 1) {
                this.$bus.$emit("avtives", 2);
                this.files = true;
                this.checked = false;
            }
        },
        //复选框
        toggle(item) {
            item.isChecked = !item.isChecked;
            // if (item.isChecked === false) {
            //     this.$refs.checkboxs.toggle(false);
            // }
        },
        changeRadio() {
            console.log("1");
        },
        // changeBox() {
        //     console.log(this.check);
        //     console.log("11111111111");
        // },
        //控制步骤条
        actives() {
            if (this.active == 2) {
                this.radios = true;
                this.$bus.$emit("avtives", 3);
            }
        },
        //全选与反选
        checkAll() {
            if (this.active == 2) {
                this.$bus.$emit("avtives", 3);
            }
            if (this.flog == 1) {
                this.$refs.checkboxGroup.toggleAll(true);
                this.flog = 0;
            } else {
                this.$refs.checkboxGroup.toggleAll(false);
                this.flog = 1;
            }
        },
        //取消方法
        toHandle() {
            this.$router.push("/handle");
        },
        //提交方法
        toConfirm() {
            if (this.active == 3) {
                this.$router.push("/option/confirm");
            } else {
                this.$notify("请按步骤完成提交！");
            }
        },
    },
    mounted() {
        //获取父组件的active
        this.$bus.$on("OptionActive", (item) => {
            this.active = item;
        });
    },
};
</script>

<style scope>
</style>