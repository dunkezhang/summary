# mac下privoxy配置，让终端实现翻墙

## 安装 && 配置privoxy

1. 使用homebrew安装privoxy

   ```nginx
   brew install privoxy
   ```

2. 安装成功后，终端输入

   ```
   cd /usr/local/etc/privoxy/
   ```

   进入privoxy配置文件夹下，运行：

   ```php
   echo 'listen-address 0.0.0.0:8118\nforward-socks5 / localhost:1087 .' >> config
   ```

   > ps: 注意别忘了最后的`.`！

## 启动监听端口

```nginx
export http_proxy=http://127.0.0.1:1087;
export https_proxy=https://127.0.0.1:1087;
```

## 查看8118端口有没有监听成功

```nginx
netstat -na | grep 8118
```

如果出现以下代码，则表示监听成功，

```nginx
tcp4 0 0 127.0.0.1.8118 *.* LISTEN
```

## 测试是否翻墙成功

1. curl测试
   终端输入`curl www.google.com`，如果返回谷歌首页的html代码，说明成功访问到谷歌。这就说明你已经翻过墙头，连接外网了！！！