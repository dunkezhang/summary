npm 脚本理解

每当执行npm run ,就会自动新建一个Shell,在这个Shell里面执行指定的脚本命令。因此，只要是Shell(一般是Bash)可以运行的命令，就可以写在npm脚本里面。

比较特别的是，npm run新建的这个 Shell，会将当前目录的node_modules/.bin子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。

这意味着，当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写mocha test就可以了。

```
"test": "mocha test"
```



npm 脚本有pre和post两个钩子。举例来说，build脚本命令的钩子就是prebuild和postbuild。

1. "prebuild": "echo I run before the build script",

2. "build": "cross-env NODE_ENV=production webpack",

3. "postbuild": "echo I run after the build script"

用户执行npm run build的时候，会自动按照下面的顺序执行。

```
npm run prebuild && npm run build && npm run postbuild
```





