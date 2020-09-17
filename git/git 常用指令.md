1. 删除远端分支

```
git push --delete origin oldName
```

2. 修改本地分支名

```
git branch -m oldName newName
```

3. 添加远端仓库信息

```
 git remote add name url          //添加一个远程仓库，命名为 name ，其对应资源地址由 url 指定
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

