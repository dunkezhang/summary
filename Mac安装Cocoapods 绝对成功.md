https://www.jianshu.com/p/14c7260ab8b7

# Mac安装Cocoapods 绝对成功



### 提要

刚开始学习iOS开发时用到了Cocoapods，安装时踩了许多坑，现在总结一下之前的安装经验

### 1. 先安装Homebrew

#### 可能遇到的问题：

安装Homebrew时总是报错（Failed to connect to raw.githubusercontent.com port 443: Connection refused）

#### 原因：

由于某些你懂的因素，导致GitHub的raw.githubusercontent.com域名解析被污染了。

#### 解决办法：

通过修改hosts解决此问题。

#### 1.1 查询真实IP

在 [https://www.ipaddress.com/](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.ipaddress.com%2F) 查询 **raw.githubusercontent.com** 的真实IP。

#### 1.2 修改hosts

进入编辑模式



```undefined
sudo vim /etc/hosts
```

添加如下内容：



```css
199.232.28.133 raw.githubusercontent.com
```

#### 1.3 安装Homebrew

执行：



```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

这样你就可以使用国内源了，再也不用痛苦了

- 参考地址：[https://blog.csdn.net/txl910514/article/details/105880125](https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Ftxl910514%2Farticle%2Fdetails%2F105880125)

### 2. 把Ruby官方镜像改为国内镜像

#### 2.1 更新gem版本

**注：这里需要翻一下墙**



```undefined
gem update --system
```

#### 2.2 查看gem版本



```undefined
gem -v
```

**注：请尽可能用比较新的 RubyGems 版本，建议 2.6.x 以上。**
 **我目前的版本为2.6.3，安装更新后为3.0.2**

#### 2.3 修改镜像



```csharp
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/

gem sources -l
```

终端显示为如下即为成功，注：确保只有 **gems.ruby-china.com** 才为成功



```cpp
*** CURRENT SOURCES ***
https://gems.ruby-china.com/
```

- 参考地址：[https://gems.ruby-china.com/](https://links.jianshu.com/go?to=https%3A%2F%2Fgems.ruby-china.com%2F)

### 3. 通过Homebrew安装ruby最新版

#### 3.1 查看 ruby 的安装目录**



```bash
which -a ruby
```

**注：执行以上命令后会输出 2 行，**
 **1. 其中 /usr/local/opt/ruby/bin/ruby 是通过 Homebrew 安装的，**
 **2. 而 /usr/bin/ruby 是 Mac 自带的 ruby，**
 **3. 请不要随便删除自带的 ruby， 否则会出现问题（这个本人也没尝试只是老外博文里说的）**

**通过 HomeBrew安装的版本：ruby 3.0.2  路径：/usr/local/opt/ruby/bin/ruby**
 **Mac 自带版本：  ruby 2.6.3  路径：/usr/bin/ruby**

#### 3.2 通过 Homebrew 安装 ruby



```undefined
brew install ruby
```

#### 3.3 使用以下命令查看 ruby 版本



```undefined
ruby -v
```

如果成功安装之后使用命令查看 ruby 版本发现仍然是 Mac 自带的版本，类似如下



```css
ruby 2.6.3p62 (2019-04-16 revision 67580) [universal.x86_64-darwin20]
```

#### 3.4 此时只需把 ruby 3.0.2 可执行文件导入全局变量 PATH 中即可，使用如下命令：



```bash
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc

source ~/.zshrc
```

#### 3.5 再次查看 ruby 版本



```undefined
ruby -v
```

显示以下命令行即为成功



```css
ruby 3.0.2p107 (2021-07-07 revision 0db68f0233) [x86_64-darwin20]
```

至此 ruby 3.0.2 安装成功

- 参考地址：https://www.jianshu.com/p/2635ecdb748b

### 4. 安装Cocoapods

#### 4.1 安装



```undefined
sudo gem uninstall cocoapods
```

#### 4.2 更新



```undefined
pod setup —verbose
```

#### 可能遇到的问题：

出现zsh: command not found: pod

#### 解决：

##### 4.2.1 为了安全起见，执行以下命令，卸载原有的CocoaPod



```undefined
sudo gem uninstall cocoapods
```

##### 4.2.2 执行以下命令来重新安装cocoapod



```bash
sudo gem install -n /usr/local/bin cocoapods
```

##### 4.2.3 如果没有权限执行pod，执行以下命令，赋予/usr/local/bin给予执行与读取权限



```bash
sudo chmod +rx /usr/local/bin/
```

- 参考地址：https://www.jianshu.com/p/6ff1903c3f11

### 5.更新Cocoapods镜像源

#### 5.1 移除原镜像源



```csharp
pod repo remove master
```

#### 5.2 添加国内镜像源



```php
git clone https://github.com/CocoaPods/Specs.git ~/.cocoapods/repos/master
```

#### 5.3 更新镜像源



```undefined
pod repo update
```



作者：非叼牛
链接：https://www.jianshu.com/p/14c7260ab8b7
