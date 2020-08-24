## http结构图
![](https://s2.ax1x.com/2019/06/21/ZSEFmt.png)

## 请求方法

* get 获取数据
* post 表单提交
* head 返回请求头
* put 添加资源
* delete 删除资源
* connect 多用于HTTPS和WebSocket
* option 调试
* trace 调试

### get和post区别
1. GET产生一个TCP数据包；POST产生两个TCP数据包。

对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；

而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。


## 请求头
HTTP首部字段是构成HTTP豹纹的要素之一。在客户端与服务器之间以HTTP协议进行通信的过程中，无论是请求还是相应队徽使用首部字段，他能起到传递额外重要信息的作用。

使用首部阻断是为了给浏览器和服务器提供豹纹主体大小、所使用的语言、认证信息等内容。

### Request header

|  首部字段名   | 说明  |
|  ----  | ----  |
| Accept  | 浏览器接受的格式 |
| Accept-Charset  | 浏览器端接受的编码方式 |
| Accept-Encoding | 浏览器端接受的编码方式 |
| Accept-Language | 浏览器接受的语言 |
| Authorization  | 单元格 |
| Expect  | 浏览器希望达到什么 |
| From  | 一般填入邮箱 |
| Host  | HTTP访问使用的域名 |
| If-Modified-Since | 上次访问的更改时间，如果服务端认为此时间后自己没有更新，则会给出304详情 |
| User-Agent  | 客户端标识 |

### Reponse header

|  首部字段名   | 说明  |
|  ----  | ----  |
| Cache-Control | 缓存控制 |
| Conncection  | 连接类型，Keep-Alive表示复用连接 |
| Content-Encoding | 内容编码方式 |
| Content-Length| 内容的长度，有利于浏览器判断内容是否已经结束 |
| Content-type | 内容类型，所有请求网页的都是text/html |
| Date | 当前的服务器日期 |
| ETag | 页面的信息摘要，用于判断是否需要重新到服务端拉回页面 |
| Expires | 过期时间，用于判断下次请求是否需要到服务端拉回页面 |
| Keep-Alive| 保持连续不断时需要的一些信息，如timeout=5,max=100|
| Last-Modified | 页面上次修改的时间 |
| Server  | 服务端软件的类型 |
| Via  | 服务端的请求链路 |
|  Set-Cooke | 设置cooke，可以存在多个 |

## hTTP Status code
* 1xx: 临时回应，表示客户端请继续

* 2xx: 成功

	* 204 请求处理成功，但没有资源可以返回
	* 206 表示客户端进行了范围请求

* 3xx: 重定向

	* 301 永久性重定向
	* 302 临时性重定向
	* 304 跟客户端缓存没更新 
* 4xx: 客户端错误

	* 400 客户端请求报文中存在语法错误
	* 401 表示发送的请求需要有通过HTTP认证的认证信息。另外若之前进行过一次请求，则表示认证失败。
	* 404 找不到接口
	* 403 访问资源受限制


* 5xx: 服务器错误

	* 500 表示服务端在执行请求时发生了错误
	* 503 表示服务端处于超负载状态或者处于临时停机，现在无法处理请求。

## http缺点

1. 通信使用明文（不加密），内容可能会被窃听
2. 不验证通信方的身份，可能遭遇伪装
3. 无法证明报文的完整性，可能遭遇篡改

## 参考资料
1. 极客时间（winter的重学前端）
2. 图解HTTP