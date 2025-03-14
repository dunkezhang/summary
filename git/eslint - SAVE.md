## **5. 启用 VS Code "保存时自动格式化"**

### **方法 1：全局配置（VS Code 设置）**

1. **打开 VS Code 设置**（`Ctrl + ,`）。

2. 搜索 **"format on save"**，勾选 ✅ **Editor: Format On Save**。

3. 搜索 

   "codeActionsOnSave"

   ，点击 

   "Edit in settings.json"

   ，添加：

   ```
   json
   
   
   复制编辑
   "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
   }
   ```

4. 这样，每次保存文件时，VS Code 就会自动格式化代码，并应用 ESLint 规则。

------

### **方法 2：项目级配置**

如果你只想在某个项目启用自动格式化，而不是全局：

1. 在项目根目录下新建 `.vscode/settings.json`（如果没有）。

2. 添加以下内容：

   ```
   json
   
   
   复制编辑
   {
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
   }
   ```

这样，只有这个项目的代码才会在保存时被 ESLint 自动修复。