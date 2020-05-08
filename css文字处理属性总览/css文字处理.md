## 1. white-space
   white-space 属性是用来设置如何处理元素中的空白,可参考[white-space的使用],(https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space) ,分别有如下值:

   1. normal 默认。空白会被浏览器忽略。
   2. pre 空白会被浏览器保留。其行为方式类似 HTML 中的 pre 标签。
   3. nowrap 文本不会换行，文本会在在同一行上继续，直到遇到 br 标签为止。
   4. pre-wrap 保留空白符序列，但是正常地进行换行。
   5. pre-line 合并空白符序列，但是保留换行符。
   i6. nherit 规定应该从父元素继承 white-space 属性的值。

## 2. word-wrap
   word-wrap属性用来标明是否允许浏览器在单词内进行断句，可参考word-wrap,这是为了防止当一个字符串太长而找不到它的自然断句点时产生溢出现象。

   1. normal: 只在允许的断字点换行(浏览器保持默认处理)
   2. break-word:在长单词或URL地址内部进行换行

## 3. word-break
   word-break 属性用来标明怎么样进行单词内的断句。可参考:word-break

   1. normal：使用浏览器默认的换行规则。
   2. break-all:允许在单词内换行
   3. keep-all:只能在半角空格或连字符处换行

## 4. Text-overflow

   text-overflow CSS 属性确定如何向用户发出未显示的溢出内容信号。它可以被剪切，显示一个省略号（’…’，U + 2026 HORIZONTAL ELLIPSIS）或显示一个自定义字符串。可参考:text-overflow

   1. clip这个关键字的意思是"在内容区域的极限处截断文本"，因此在字符的中间可能会发生截断。为了能在两个字符过渡处截断，你必须使用一个空字符串值 (’’)(To truncate at the transition between two characters, the empty string value (’’) must be used.)。此为默认值。
   2. ellipsis这个关键字的意思是“用一个省略号 (’…’, U+2026 HORIZONTAL ELLIPSIS)来表示被截断的文本”。这个省略号被添加在内容区域中，因此会减少显示的文本。如果空间太小到连省略号都容纳不下，那么这个省略号也会被截断。
   3. string用来表示被截断的文本。字符串内容将被添加在内容区域中，所以会减少显示出的文本。如果空间太小到连省略号都容纳不下，那么这个字符串也会被截断。