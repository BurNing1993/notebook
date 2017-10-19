# Daily-Report
Project learning report

from Oct 17,2017

Hello
====
I like [Google](https://www.google.com/)

H1
====

H2
----

 #### H4

 ##### H5

>多行引用
>可以在每行前加'>'

* 可以使用'*'标记

+ 也可以用'+'

- 或者'-'

1. 有序列表以数字和'.'开始;
3. 数字的序列并不会影响生成的序列

代码块
====

    <html>
    
    代码块：代码块前后需要有至少一个空行，且每行代码前需要有至少一个 Tab 或四个空格；
     
     </html>
     
`<title>行内代码:也可以通过 ``，插入行内代码（ 是 Tab 键上边、数字 1 键左侧的那个按键）：</title>`

### 分隔线

可以在一行中使用三个或更多的 *、- 或 _ 来添加分隔线（<hr>）：. 多个字符之间可以有空格（空白符），但不能有其他字符：

****

-----

________


### 超链接

#### 行内式

格式为 [link text](URL 'title text')。

[Google](http://www.google.com/)

#### 参考式
参考式链接的写法相当于行内式拆分成两部分，并通过一个 识别符 来连接两部分。参考式能尽量保持文章结构的简单，也方便统一管理 URL。

[Google][link]

[Google]: http://www.google.com/ "Google"

#### 自动链接
使用 <> 包括的 URL 或邮箱地址会被自动转换为超链接：

<http://www.google.com/>

#### 图片

插入图片的语法和插入超链接的语法基本一致，只是在最前面多一个 !。也分为行内式和参考式两种。

##### 行内式

    ![GitHub](https://avatars2.githubusercontent.com/u/3265208?v=3&s=100 "GitHub,Social Coding")
![GitHub](https://avatars2.githubusercontent.com/u/3265208?v=3&s=100 "GitHub,Social Coding")
    
方括号中的部分是图片的替代文本，括号中的 'title' 部分和链接一样，是可选的。

##### 参考式

     ![GitHub][github]

     [github]: https://avatars2.githubusercontent.com/u/3265208?v=3&s=100 "GitHub,Social Coding"
     
 
 ![GitHub][github]

  [github]: https://avatars2.githubusercontent.com/u/3265208?v=3&s=100 "GitHub,Social Coding"
     
##### 指定图片显示的大小
Markdown 不支持指定图片的显示大小，不过可以通过直接插入<img />标签来指定相关属性：

     <img src="https://avatars2.githubusercontent.com/u/3265208?v=3&s=100" alt="GitHub" title="GitHub,Social Coding" width="50" height="50" />
     
  <img src="https://avatars2.githubusercontent.com/u/3265208?v=3&s=100" alt="GitHub" title="GitHub,Social Coding" width="50" height="50" />

#### 强调
1.使用 * * 或 _ _ 包括的文本会被转换为 <em></em> ，通常表现为斜体：

           这是用来 *演示* 的 _文本_
           
这是用来 *演示* 的 _文本_

2.使用 ** ** 或 __ __ 包括的文本会被转换为 <strong></strong>，通常表现为加粗：

     这是用来 **演示** 的 __文本__

这是用来 **演示** 的 __文本__

3.用来包括文本的 * 或 _ 内侧不能有空白，否则 * 和 _ 将不会被转换（不同的实现会有不同的表现）：

     这是用来 * 演示* 的 _文本 _
     
 这是用来 * 演示* 的 _文本 _
 
4.如果需要在文本中显示成对的 * 或 _，可以在符号前加入 \ 即可：
 
       这是用来 \*演示\* 的 \_文本\_
       
  这是用来 *演示* 的 _文本_
  
5. *、**、_ 和 __ 都必须 成对使用 。


#### 字符转义
反斜线（\）用于插入在 Markdown 语法中有特殊作用的字符。
        这是用来 *演示* 的 _文本_
        这是用来 \*演示\* 的 \_文本\_
        
这是用来 *演示* 的 _文本_

这是用来 \*演示\* 的 \_文本\_

这些字符包括：

      \
      `
      *
      _
      {}
      []
     ()
         #
     +
     -
     .
     !
     
     
#### 删除线
        这就是 ~~删除线~~
        
 这就是 ~~删除线~~
 
 
