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



## 全局配置

1. 打开终端工具，执行以下命令，根据输出结果分别执行不同命令。

   ```shell
   echo $SHELL 
   ```

   - 如输出结果为/bin/bash，则执行以下命令，打开.bash_profile文件。

     ```shell
     vi ~/.bash_profile
     ```

   - 如输出结果为/bin/zsh，则执行以下命令，打开.zshrc文件。

     ```shell
     vi ~/.zshrc
     ```

2. 单击字母“i”，进入**Insert**模式。

我的电脑是/bin/zsh，所以输入vi ~/.zshrc

```
# 打开
export http_proxy='http://localhost:8118'
export https_proxy='http://localhost:8118'

# 关闭
unset http_proxy
unset https_proxy
# 打开
function proxy_on() {
    export no_proxy="localhost,127.0.0.1,localaddress,.localdomain.com"
    export http_proxy="http://127.0.0.1:8118"
    export https_proxy=$http_proxy
    echo -e "已开启代理"
}
# 关闭
function proxy_off(){
    unset http_proxy
    unset https_proxy
    echo -e "已关闭代理"
}
```

修改完成后`source ~/.zshrc` 使配置文件立即生效。然后可以通过以下命令进行开关：

```
# 打开
proxy_on
# 关闭
proxy_off
```

