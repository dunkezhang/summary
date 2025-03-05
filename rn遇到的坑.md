rn遇到的坑

键盘问题：

keyboardDismissMode='on-drag'
keyboardShouldPersistTaps='handled'



ios设备弹出键盘后，点击屏幕收起键盘时页面滑动到顶部

给KeyboardAwareSectionList这个组件加上enableResetScrollToCoords={false}这个属性

```
<KeyboardAwareSectionList
              keyboardDismissMode='on-drag'
              keyboardShouldPersistTaps='handled'
              enableResetScrollToCoords={false}
              // keyboardShouldPersistTaps={'always'}
              extraHeight={120}/>
```

