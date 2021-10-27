## 1. cat:  查看文件内容

   cat file1 查看file1的内容

## 2. vi: 编辑器

编辑文件 vi 1.txt (按i进入编辑模式，先按esc,输入:wq保持退出，:qa!强制退出)

vim ~/.bash_profile （上次添加跳板机的时候进入这个文件修改一些东西），然后就查了vim也是编辑某个文件，是vi的升级版本

bash_profile文件修改后要运行一下让它生效source ~/.bash_profile

open -t .bash_profile可以编辑bash_profile文件

## 3. rm

删除文件  rm test.text

删除目录  rm -rf test

## 4. touch

新建文件 touch 1.text

## 5. mkdir

新建文件夹  mkdir test

## 6.  tail 打印日志

tail -f app.log |grep 邀请码 -A 5

打印最近匹配邀请码行的后5行

注意和上面的cat不一样，cat是把整个文件输出出来

## 7. find：搜索文件

常用参数：

-name 按照名字查找

-type 按照文件类型查找（f一般文件 d目录 l 链接文件）

-size 按照文件大小查找

## 8. curl 请求

curl 是常用的命令行工具，用来请求 Web 服务器。它的名字就是客户端（client）的 URL 工具的意思。

下面的测试是为了测试某个http请求整个过程中所花费的时间

```
curl -w "
time_namelookup:  %{time_namelookup}\n
TCP handshake: %{time_connect},\n
SSL handshake: %{time_appconnect},\n
time_redirect:  %{time_redirect}\n
time_pretransfer:  %{time_pretransfer}\n 
time_starttransfer: %{time_starttransfer}\n
----------\n
time_total:  %{time_total}\n", -so /dev/null https://zhihu.com
```

- `time_namelookup`：DNS 域名解析的时候，就是把 `https://zhihu.com` 转换成 ip 地址的过程
- `time_connect`：TCP 连接建立的时间，就是三次握手的时间
- `time_appconnect`：SSL/SSH 等上层协议建立连接的时间，比如 connect/handshake 的时间
- `time_redirect`：从开始到最后一个请求事务的时间
- `time_pretransfer`：从请求开始到响应开始传输的时间
- `time_starttransfer`：从请求开始到第一个字节将要传输的时间
- `time_total`：这次请求花费的全部时间

我们先看看一个简单的请求，没有重定向，也没有 SSL 协议的时间：

```
time_namelookup:  0.012
       time_connect:  0.227
    time_appconnect:  0.00
      time_redirect:  0.000
   time_pretransfer:  0.227
 time_starttransfer:  0.443
                    ----------
         time_total:  0.867
```

从这个输出，我们可以算出各个步骤的时间：

- DNS 查询：12ms
- TCP 连接时间：pretransfter(227) - namelookup(12) = 215ms
- 服务器处理时间：starttransfter(443) - pretransfer(227) = 216ms
- 内容传输时间：total(867) - starttransfer(443) = 424ms



ttfb建议在200ms