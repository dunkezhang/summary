## git reset

## git revert

Git 的 revert命令可以用来撤销提交（commit），对于常规的提交来说，revert命令十分直观易用，相当于做一次被revert的提交的【反操作】并形成一个新的commint.

### 但是当你需要撤销一个合并（merge）的时候，事情就变得稍微复杂了一些。

比如我需要撤销一个合并(merge)的时候，事情就变得复杂一些:![image-20200330155340219](./image-20200330155340219.png)



我输入

```
git revert dd2683caa291adf359fba6054a1c28e39f5b32a4
```

git就报错

error: commit dd2683caa291adf359fba6054a1c28e39f5b32a4 is a merge but no -m option was given.
fatal: revert failed

这是因为我revert的commit是一个merge commit，它有两个parent,就没法diff，所以就报错了，所以我们要显示告诉Git用哪一个parant

一般来说，我在[develop]分支merge[test]，那么 parent 1就是develop，patent 2 就是test

