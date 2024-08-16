# 如何使用Charles工具抓包

更新时间: 2024-07-31 17:20

分享



添加收藏

Charles是一款用于网络调试和分析的代理工具，可以拦截和查看设备与服务器之间的网络通信。通过Charles，可以监视应用程序的网络流量、修改请求和响应，甚至模拟不同的网络条件。其主要功能包括：

- 截取http和https网络封包。
- 支持重发网络请求，方便后端调试。
- 支持修改网络请求参数。
- 支持网络请求的截获并动态修改。
- 支持模拟慢速网络。

使用时需要通过设置应用的请求经过Charles客户端代理转发到服务器，这样可以在Charles客户端进行抓包。具体使用步骤如下：

1. 安装Charles。

2. 设备代理设置：

   1. 查看Charles的IP地址，一般与PC主机的IP地址保持一致。

      Charles的IP地址查看方式：点击Help -> Local IP Address查看。

      电脑IP地址查看方式：打开“运行”（快捷键：win+R键或者在任务栏的”搜索”按钮中查找并点击”运行”），输入“cmd”后进入命令行窗口，在命令行窗口中输入”ipconfig”命令查看IP。

   2. 设置Charles侧的调试端口号：点击Proxy -> Proxy Setting，进行设置，一般默认端口号为8888，端口号只要不和其他程序的冲突即可，勾选Enable transparent HTTP proxying。

   3. 手机与PC连接在同一局域网下，增加手动代理，服务器主机名与端口号为前两步获取到的IP地址和端口号。

      手机Wi-Fi手动代理设置方式：

      设置 -> WLAN -> 弹出搜索到的可用Wi-Fi列表（未连接过的Wi-Fi）-> 点击连接Wi-Fi，进入密码输入界面 -> 弹出页内“代理”选择“手动”-> 代理服务器主机名填入PC端IP地址，端口号一般都填8888 -> 点击连接。

3. PC端Charles导出证书。操作步骤：点击Help -> SSL Proxying -> Install Charles Root Certificate on a Mobile Device or Remote Browser。

4. 导入系统根证书至手机：

   1. 通过手机浏览器输入Charles提供的网址下载证书，在浏览器下载之后要另存到下载目录。

      ![点击放大](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240731151158.21928710400480230847108794983103:50001231000000:2800:5F870F31756D1EFB7F2D83B81821B1789D7F6522E6866607890E2E46DAA140B2.png?needInitFileName=true?needInitFileName=true)

   2. 使用如下命令启动证书安装：

      ```css
      hdc shell aa start -a MainAbility -b com.ohos.certmanager
      ```

   3. 选择从存储设备安装，选择指定pem证书。

5. 安装Charles证书到PC系统可信目录。操作步骤：点击 Help -> SSL Proxying -> Install Charles Root Certificate -> 安装证书 -> 选择证书存储路径为：受信任的根证书颁发机构。

6. 打开Charles，开始抓包。

说明

1. 配置环境时，需要在电脑Charles弹出的窗口选择Allow，才能够跟手机连接。
2. 下载证书时，链接需加上http://chls.pro/ssl，下载完需要另存到公共目录Download。