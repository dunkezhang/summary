Android Project和app中两个build.gradle配置的区别


　　Android开发也挺长时间了，从开始就使用的AndroidStudio开发，但是说下来其实自己对AS（AndroidStudio简称）还真的是不了解不深入、好吧，其实我只知道AS是一个相当强大的工具，我要学习的还有很多。
　　言归正传，这段时间在学习RtroLambda和ButterKnife的使用，我发现他们的导入在Project的build.gradle中引入的而不是在app的build.gradle中，这让我觉得有点郁闷，因为我才发现不太知道这两个gradle的区别，下面来总结一下。

　　一般创建一个android项目后回出现两个gradle:一个build.gradle(app)，一个build.gradle(Project)，顾名思义就是一个是用来配置整个工程的的一个是用来配置app的。



一、gradle中dependencies 的区别：
下面英文就是对compile和classpath区别的解释：

I’m going to guess that you’re referencing compile and classpath
within the dependencies {} block. If that is so, those are dependency
Configurations.

A configuration is simply a named set of dependencies. The compile
configuration is created by the Java plugin. The classpath
configuration is commonly seen in the buildSrc {} block where one
needs to declare dependencies for the build.gradle, itself (for
plugins, perhaps).

classpath的作用：

buildscript itself needs something to run, use classpath

complie的作用：

your project needs something to run, use compile

　　在Project中的gradle的dependencies 指添加依赖是使用classpath的，classpath一般是添加buildscript本身需要运行的东西，那么buildscript是用来什么呢？buildScript是用来加载gradle脚本自身需要使用的资源，可以声明的资源包括依赖项、第三方插件、maven仓库地址等。
　　在app中的gradle中dependencies 中添加的使应用程序所需要的依赖包，也就是项目运行所需要的东西。

二、compile有哪几种?
Compile
compile是对所有的build type以及favlors都会参与编译并且打包到最终的apk文件中。

Provided
Provided是对所有的build type以及favlors只在编译时使用，类似eclipse中的external-libs,只参与编译，不打包到最终apk。

APK
只会打包到apk文件中，而不参与编译，所以不能再代码中直接调用jar中的类或方法，否则在编译时会报错

Test compile
Test compile 仅仅是针对单元测试代码的编译编译以及最终打包测试apk时有效，而对正常的debug或者release apk包不起作用。

Debug compile
Debug compile 仅仅针对debug模式的编译和最终的debug apk打包。

Release compile
Release compile 仅仅针对Release 模式的编译和最终的Release apk打包
————————————————





修改log

```
classpath "com.android.tools.build:gradle:4.1.1"
```

build:gradle改为从4.0.1改为4.1.1原因是

在4.0到4.1会去找ndk version，出现ndk version不匹配



修改com.android.tools.build:gradle:4.1.1为com.android.tools.build:gradle:3.5.3

修改原因是Release APK: Unable to load script. Make sure you're either running a Metro server (run 'react-native start') or that your bundle 'index.android.bundle' is packaged correctly for release.

解决办法参照：

https://github.com/react-native-community/upgrade-support/issues/38

![image-20240221094656915](/Users/a1234/Library/Application Support/typora-user-images/image-20240221094656915.png)





能正常跑app后发现拍照功能无法使用，所以升级了这个库@ecool/react-native-image-crop-picker

 error: unexpected element <queries> found in <manifest>.

I had this error in the `react-native-image-crop-picker` library, and I solved this problem by updating the Gradle version as mentioned in previous answers.

It was:

```java
classpath("com.android.tools.build:gradle:3.5.3")
```

Updated to:

```java
classpath("com.android.tools.build:gradle:3.5.4")
```



升级了这个库@ecool/react-native-image-crop-picker后安卓能正常运行了，发现ios打包也出现了问题



Sudo pod install 下载报无法访问根目录ou cannot run CocoaPods as root.\e[39m (CLAide::Help)

在 m1 中运行 MAC`sudo arch -x86_64 pod install --allow-root`可以解决此问题。



出现Failed to connect to chromium.googlesource.com port 443: Operation timed out

Terminal没有走代理

https://blog.csdn.net/iOS_MingXing/article/details/103736147



Clean build folder. Then use the code following:

```undefined
pod reintegrate 
```





 [java.lang.RuntimeException: Requested enabled DevSupportManager, but DevSupportManagerImpl class was not found or could not be created](https://stackoverflow.com/questions/60926425/java-lang-runtimeexception-requested-enabled-devsupportmanager-but-devsupportm)



解决办法：implementation 'com.squareup.okhttp3:okhttp:3.14.9'



最终android升级，升级了两个库：react-native-fast-image和@ecool/react-native-image-crop-picker



react-native-fast-image又降级到以前的版本，因为升级到最新的安卓打开闪退，从8.6.3降级到8.3.2



安卓13拍摄视频失败，是因为文件分区原因，检查是否具有管理外部存储的权限：动态申请权限

```
		
            
    private void requestStoragePermission() {
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            try {
                Intent intent = new Intent(Settings.ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION);
                startActivityForResult(intent, REQUEST_CODE_STORAGE_PERMISSION);
            }catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
```

友盟分享需要升级
```
@ecool/dlsharebyumenglib
@ecool/dlstatisticsbyumenglib
```

https://developer.umeng.com/docs/128606/detail/184876
https://developer.umeng.com/docs/66632/detail/66639

遇到emb打包失败，本地打包成功：

android {    lintOptions {        disable "Instantiatable"    } }

按到如下教程配置：https://cloud.tencent.com/developer/ask/sof/107626254



https://github.com/facebook/react-native/pull/30177



不能打包出bundle解决办法：npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle && cd android && ./gradlew clean && ENVFILE=.env.test ./gradlew assembleRelease
