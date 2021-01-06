<template>
    <div :class="className">
        <div ref="slideRef" :class="{animate: animate}">
            <p v-for="(item, index) in list" :key="index">
                <i v-if="showNotice" class="wzj-icon-notice"></i>
                <span>{{item}}</span>
            </p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TextSlide',
    props: {
      className: {
        type: String,
        default: 'slide-list',
      },
      slideList: {
        type: Array,
        default: () => [],
      },
      showNotice: { // 消息icon
        type: Boolean,
        default: true,
      },
      timeScroll: { // 间隔多长时间滚动
        type: Number,
        default: 2500,
      },
      timeMove: { // 延迟多次时间滚动
        type: Number,
        default: 600,
      },
    },
    data() {
      return {
        list: this.slideList,
        slideRef: null, // 滚动dom
        animate: false, // 是否动画中
        timerScroll: null, // 间隔多少秒滚动timer
        timerMove: null, // 动画延迟时间
      }
    },
    watch: {
      slideList: function(v) {
        this.list = v
      },
    },
    mounted() {
      this.slideRef = this.$refs.slideRef
      this.startScroll()
    },
    beforeDestroy() {
      this.clearTimerScroll()
      this.clearTimerMove()
    },
    methods: {
      clearTimerScroll() {
        if (this.timerScroll) {
          window.clearInterval(this.timerScroll)
          this.timerScroll = null
        }
      },
      clearTimerMove() {
        if (this.timerMove) {
          window.clearTimeout(this.timerMove)
          this.timerMove = null
        }
      },
      startScroll() {
        this.clearTimerScroll()
        this.timerScroll = setInterval(() => {
          this.startMove()
        }, this.timeScroll)
      },
      startMove() {
        this.clearTimerMove()
        const { slideRef, list } = this
        if (!slideRef && list.length) {
          return false
        }
        this.animate = true
        this.timerMove = setTimeout(() => {
          list.push(list[0])
          list.shift()
          this.list = list
          this.animate = false
        }, this.timeMove)
      },
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "~assets/scss/main";

    .animate {
        transition: all .3s linear;
    }

    .slide-list {
        $scrollHeight: 40px;

        margin: 0 auto;
        padding: 0 15px;
        height: $scrollHeight;
        box-sizing: border-box;
        border-radius: 20px;
        overflow: hidden;
        width: toPercent(470, 750);
        background-color: rgba(106, 30, 27, 0.3);
        & > .animate {
            margin-top: -$scrollHeight;
        }
        p {
            text-align: center;
            color: rgba(255, 255, 255, 0.66);
            font-size: 22px;
            line-height: $scrollHeight;
            @include text-ellipsis();
            @include flex-horizontal(center);
            & > i {
                font-size: 20px;
                margin-right: 5px;
            }
        }
    }

    .slide-list-flop {
        $scrollHeight: 40px;
        margin: 0 auto;
        padding: 0 15px;
        height: $scrollHeight;
        box-sizing: border-box;
        border-radius: 20px;
        overflow: hidden;
        width: toPercent(560, 750);
        background-color: #672c34;
        & > .animate {
            margin-top: -$scrollHeight;
        }
        p {
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
            font-size: 22px;
            line-height: $scrollHeight;
            @include text-ellipsis();
            @include flex-horizontal(center);
            & > i {
                font-size: 20px;
                margin-right: 5px;
            }
        }
    }

    .fold-slide-list{
        $scrollHeight: 40px;
        height: $scrollHeight;
        box-sizing: border-box;
        border-radius: 20px;
        overflow: hidden;
        width: 100%;
        padding: 0 20px;
        & > .animate {
            margin-top: -$scrollHeight;
        }
        p {
            text-align: left;
            color: #FFF2D0;
            font-size: 22px;
            line-height: $scrollHeight;
            @include text-ellipsis();
            // @include flex-horizontal(center);
            & > i {
                margin-right: 5px;
            }
        }
    }

    .bargain-slide-list{
      $scrollHeight: 64px;
      height: $scrollHeight;
      box-sizing: border-box;
      border-radius: 20px;
      overflow: hidden;
      width: 710px;
      padding: 0 30px;
      border: 1Px solid #BE4C4B;
      border-radius: 40px;
      background-color: #faebec;
      margin:30px 20px;
      & > .animate {
          margin-top: -$scrollHeight;
      }
      p {
          text-align: left;
          color: #BE4C4B;
          font-size: 24px;
          line-height: $scrollHeight;
          @include text-ellipsis();
          // @include flex-horizontal(center);
          & > i {
              font-size: 24px;
              margin-right: 5px;
          }
      }
    }

    .lottery-slide-list {
        $scrollHeight: 44px;

        margin: 0 auto;
        padding: 0 40px;
        height: $scrollHeight;
        box-sizing: border-box;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.22);

        & > .animate {
            margin-top: -$scrollHeight;
        }

        p {
            text-align: left;
            color: #fff;
            font-size: 22px;
            line-height: $scrollHeight;
            @include text-ellipsis();
            @include flex-horizontal(left);

            & > i {
                font-size: 20px;
                margin-right: 10px;
            }
        }
    }
</style>
