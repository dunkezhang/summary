**git cherry-pick**可以选择某一个分支中的一个或几个commit(s)来进行操作。例如，假设我们有个稳定版本的分支，叫v2.0，另外还有个开发版本的分支v3.0，我们不能直接把两个分支合并，这样会导致稳定版本混乱，但是又想增加一个v3.0中的功能到v2.0中，这里就可以使用cherry-pick了,其实也就是对已经存在的commit 进行再次提交.

------

**简单用法：**
 git cherry-pick <commit id>
 **注意：当执行完 cherry-pick 以后，将会生成一个新的提交；这个新的提交的哈希值和原来的不同，但标识名一样；**

**例如：**
 $ git checkout v2.0分支
 $ git cherry-pick 38361a55    # 这个 38361a55 号码，位于v3.0分支中：

> $ git log
>  commit 38361a55138140827b31b72f8bbfd88b3705d77a
>  Author: Justin [Justin@xxx.com](https://link.jianshu.com?t=mailto:Justin@xxx.com)
>  Date:   Sat Dec 10 00:11:44 2016 +0800

**1. 如果顺利，就会正常提交**。结果：

> Finished one cherry-pick.
>  On branch v2.0分支
>  Your branch is ahead of 'origin/old_cc' by 3 commits.

**2. 如果在cherry-pick 的过程中出现了冲突**

> Automatic cherry-pick failed.
>  After resolving the conflicts,mark the corrected paths with 'git add <paths>' or 'git rm <paths>'and commit the result with:
>  git commit -c 15a2b6c61927e5aed6111de89ad9dafba939a90b
>  **或者:**
>  error: could not apply 0549563... dev
>  hint: after resolving the conflicts, mark the corrected paths
>  hint: with 'git add <paths>' or 'git rm <paths>'
>  hint: and commit the result with 'git commit'

就跟普通的冲突一样，手工解决：

**2.1 $ git status    # 看哪些文件出现冲突**

> both modified:      app/models/MainActivity.java

**2.2 $ vim app/models/MainActivity.java  # 手动解决它。 **

**2.3 $ git add app/models/MainActivity.java**

**2.4 git commit -c <新的commit号码>**

**2.5 再次cherry-pick剩余commit**

若提示:

> error: a cherry-pick or revert is already in progress
>  hint: try "git cherry-pick (--continue | --quit | --abort)"
>  fatal: cherry-pick failed

则执行对应操作:

> *git cherry-pick* --continue
>  *git cherry-pick* --quit
>  *git cherry-pick* --abort

------

命令集合:

- git cherry-pick <commit id>:单独合并一个提交
- git cherry-pick  -x <commit id>：同上，不同点：保留原提交者信息。
   **Git从1.7.2版本开始支持批量cherry-pick，就是一次可以cherry-pick一个区间的commit。**
- git cherry-pick <start-commit-id>..<end-commit-id>
- git cherry-pick <start-commit-id>^..<end-commit-id>

前者表示把<start-commit-id>到<end-commit-id>之间(左开右闭，不包含start-commit-id)的提交cherry-pick到当前分支；
 后者有"^"标志的表示把<start-commit-id>到<end-commit-id>之间(闭区间，包含start-commit-id)的提交cherry-pick到当前分支。
 其中，<start-commit-id>到<end-commit-id>只需要commit-id的前6位即可，并且<start-commit-id>在时间上必须早于<end-commit-id>
 注：以上合并，需要手动push代码。

作者：_Justin
链接：https://www.jianshu.com/p/08c3f1804b36
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。