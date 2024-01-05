<template>
    <button class="zl-button"
            :class="[`zl-button-${type}`,{'is-plain':plain},{'is-round':round},{'is-circle':circle},{'is-disabled':disabled}]"
            @click="handleBtnClick"
            :disabled="disabled"
    >
        <!-- 如果没有传入文本插槽，则不显示span内容 -->
        <i v-if="icon" :class="`zl-icon-${icon}`"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'zfButton',
    props: {
        // 按钮类型（primary/success/warning/danger/info)
        type: {
            type: String,
            default: "default"
        },
        // 是否为朴素按钮
        plain: {
            type: Boolean,
            default: false
        },
        // 是否为圆角按钮
        round: {
            type: Boolean,
            default: false
        },
        // 是否为圆形按钮
        circle: {
            type: Boolean,
            default: false
        },
        // 是否为禁用按钮
        disabled: {
            type: Boolean,
            default: false
        },
        // 图标类名
        icon: {
            type: String,
            default: ''
        }
    },
    data(){
        return {}
    },
    methods: {
        handleBtnClick(e) {
            this.$emit("click", e)
        }
    }
}
</script>

<style lang="scss">
.zl-button{
    display: inline-block;
    line-height: 1;
    // 禁止文件自动换行
    white-space: nowrap;
    // 鼠标移上去箭头显示一只手
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    // 去除默认样式
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    // 鼠标移上去后的状态
    &:hover,
    &:hover{
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}

// 动态绑定的css样式
.zl-button-primary{
    color:#fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus{
        background: #66b1ff;
        background-color: #66b1ff;
        color: #fff;
    }
}
.zl-button-success{
    color:#fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus{
        background: #85ce61;
        background-color: #85ce61;
        color: #fff;
    }
}
.zl-button-info{
    color:#fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus{
        background: #a6a9ad;
        background-color: #a6a9ad;
        color: #fff;
    }
}
.zl-button-warning{
    color:#fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus{
        background: #ebb563;
        background-color: #ebb563;
        color: #fff;
    }
}
.zl-button-danger{
    color:#fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus{
        background: #f78989;
        background-color: #f78989;
        color: #fff;
    }
}

// 朴素按钮样式
.zl-button.is-plain{
    &:hover,
    &:focus{
        background: #fff;
        border-color: #489eff;
        color: #409eff;
    }
}
.zl-button-primary.is-plain{
    color: #409eff;
    background: #ecf5ff;
    &:hover,
    &:focus{
        background: #409eff;
        border-color: #409eff;
        color: #fff;
    }
}
.zl-button-success.is-plain{
    color: #67c23a;
    background: #c2e7b0;
    &:hover,
    &:focus{
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
    }
}
.zl-button-info.is-plain{
    color: #909399;
    background: #d3d4d6;
    &:hover,
    &:focus{
        background: #909399;
        border-color: #909399;
        color: #fff;
    }
}
.zl-button-warning.is-plain{
    color: #e6a23c;
    background: #f5dab1;
    &:hover,
    &:focus{
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
    }
}
.zl-button-danger.is-plain{
    color: #f56c6c;
    background: #fbc4c4;
    &:hover,
    &:focus{
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
    }
}

.zl-button.is-round{
    border-radius: 20px;
    padding: 12px 23px;
}

.zl-button.is-circle{
    border-radius: 50%;
    padding: 12px;
}

// 设置icon配套样式
.zl-button [class*=zl-icon-]+span{
    margin-left: 5px;
}

// disabled样式
.zl-button.is-disabled{
    // 是否禁用状态
    cursor: no-drop;
}
</style>

