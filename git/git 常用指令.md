it1. 删除远端分支

```
git push --delete origin oldName
```

2. 修改本地分支名

```
git branch -m oldName newName
```

3. 添加远端仓库信息

```
 git remote add <name> <url>          //添加一个远程仓库，命名为 name ，其对应资源地址由 url 指定
```

4. 修改本地remote源

```
git remote set-url origin <url>
```

5. 删除本地remote源

```
git remote remove <name>
```

5. git rebase 用法

参考：https://www.jianshu.com/p/964de879904a

```
git rebase -i <commit id>
```



6. git cherry-pick用法

```
git cherry-pick <commit id>
```



参考：https://www.jianshu.com/p/08c3f1804b36



7.git commit时取消检测

```
git commit --no-verify
```

7.git remote show origin git查看远端仓库

```
git remote show origin
```

## tag

1. 推送所有本地tag到远程

```
git push origin --tags
```

2. 推送本地制定tag到远程

```
git push origin [本地tag名] 
```

3. 删除本地制定tag

```
git tag -d [本地tag名] 
```

4. 显示所有的tag信息

```
git tag
```



在项目开发过程中个，一般都会添加 .gitignore 文件，规则很简单，但有时会发现，规则不生效。
原因是 .gitignore 只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。
那么解决方法就是先把本地缓存删除（改变成未track状态），然后再提交。

```
git rm -r --cached .

git add .

git commit -m 'update .gitignore'
```
