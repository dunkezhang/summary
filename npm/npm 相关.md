1. npm

   1. npm设置镜像  `npm config set registry http://registry.npmjs.org`
   2. 查看npm当前镜像源 `npm config get registry `

2. npm源管理器nrm

   1. 安装: `npm install -g nrm`

   2. 列出可选择的源：` nrm ls`

   3. 切换使用的源：`nrm use npm`

   4. 添加一个源：`nrm add <registry> <url>`

      nrm add cfnpm http://cfnpm.dev.yuceyi.com:4873

      ![image-20210125112732614](./img/image-20210125112732614.png)
      
   5. 测试速度`nrm test npm`
   
3. npm版本管理器nvm

