# 快速开始
<script src="https://easyht.js.org/use-easyht/v0.2/use.js"></script>
<link rel="stylesheet" href="https://easyht.js.org/use-easyht/v0.2/use.css">
请注意：仅提供最新版引用方式，若需其他版本，请自行修改链接中的版本号。
CSS:
```Code
文件地址：
https://easyht.js.org/use-easyht/v0.2/use.css
引用代码（HTML）：
<link rel="stylesheet" href="https://easyht.js.org/use-easyht/v0.2/use.css">
```
JS:
```Code
文件地址：
https://easyht.js.org/use-easyht/v0.2/use.js
引用代码（HTML）：
<script src="https://easyht.js.org/use-easyht/v0.2/use.js"></script>
```

# Code标签美化
演示：
<font color=red>Sorry,由于部分原因，此部分演示删除（3:不准确）</font>

调用方法：
在HTML中使用&lt;code&gt;标签即可。 

# Pre标签美化
演示：
<font color=red>Sorry,由于部分原因，此部分演示删除（3:不准确）</font>

调用方法：
在HTML终于使用&lt;pre&gt;标签即可。

# 荧光笔（文本标记）
介绍：文字里有重点？没关系！此段CSS可以将一部分文本做各种颜色的标记

支持颜色：黄色、橙色、绿色、蓝色、红色、黑色，COLORID分别为ylw、ore、grn、ble、red、blk

使用方法：在需要标记的地方的文本前面加入&lt;span class="easyht ygb COLORID"&gt;，结尾加上&lt;/span&gt;（COLORID在上面可以看到）

演示：文字文字文字文字<span class="easyht ygb ylw">重点</span>文字文字文字，这样重点两字就拥有了黄色的底色

# 提示标签
介绍：文章有警告等小提示却不知道怎么去写？这段代码可以帮到你！
支持标签：成功、警告、错误、信息，alertId分别是：cg、jg、cw、xi
使用方法：在需要标记的地方的文本前面加入&lt;div class="easyht tip alertId"&gt;，结尾加上&lt;/div&gt
演示：xxxxx
<div class="easyht tip jg">
请勿XXXXXXXXXX
</div>
xxxxxxxxx

# 代码框
介绍：开头的Code标签还是不好看？来看看这个支持收缩的
<font color=red>此段代码依靠JavaScript</font>
支持颜色：黑色
使用方法：（看下方）
```HTML
<div class="easyht codei black head">
&nbsp;
<span onClick="easyht0001()">收起</span>
&nbsp;
<span onClick="easyht0002()">展开</span>
&nbsp;&nbsp;
<span class="easyht code lang">Code</span>
</div>
<div id="easyhtcode">
<div class="easyht codei black body">
填写代码的部分，换行仍需要<p></p>或<br />
</div>
</div>
```
<font color=red>这些代码，一行也不能少，其中，主体部分最外面的DIV负责收缩！！</font>
演示：
<font color=red>Sorry,由于部分原因，此部分演示删除（3:不准确）</font>
