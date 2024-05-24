Form 主要做下面这几件事

1. 初始化 Form 实例
2. 注册回调函数，onFieldsChange、onValuesChange、onFinish
3. 设置初始值（仅当第一次渲染时会设置 store，其他情况下仅设置 initialValues）
4. 提供 Provider
5. 渲染子节点



我梳理了rc-field-form的内部主要逻辑关系图，其中几个关键性的文件有如下几个：

1. index.tsx: 入口，导入/导出内部各个组件及自定义Hook比如Form、Field、useForm…
2.FieldContext.tsx: 创建一个Context供Form子孙组件获取form实例
3.Form.tsx:
	1.封装的form组件并通过setCallBack来设置表达组件的回调函数
	2.通过FieldContext.Provider来共享form实例给其子孙组件
	3.表单提交时，阻止默认时间&触发传进来的自定义表单事件
4.Field.tsx:
	1.将传递进来的子组件改为受控组件
	2.消费Form组件共享的form实例
	3.通过form实例上的方法收集Field组件实例
	4.监听/取消监听数据变化时，对应的 Field组件更新
5.useForm.tsx:
	1.开辟一个新的数据存储空间store来存储表单数据
	2.收集各个Field的组件实例
	3.收集 Form组件中的表单成功/失败的方法
	4.收集各个字段的校验规则
	5.提供getFieldsValue、getFieldValue、setFieldsValue...等API 来操作表单中的数据
通过useRef保存formStore的实例



form组件里面必需有一个value值和一个onChange





如果要在`非提交按钮中获取到表单数据`，需要通过调用 Form 的[实例方法](https://so.csdn.net/so/search?q=实例方法&spm=1001.2101.3001.7020)来实现。anta提供有两个方法：

1、`getFieldsValue()` 仅获取表单数据，不进行[表单校验](https://so.csdn.net/so/search?q=表单校验&spm=1001.2101.3001.7020)

2、`validateFields()` 先进行表单校验，再获取表单数据【此处，使用该方法】



trigger用来改表单值，form通过这个参数来拿到最新的值

validateTrigger用来校验表单值