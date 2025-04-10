export const command =
    [{
        value: '0',
        title: '换源',
        content: [
            'npm config ls -l  //查询配置',
            'npm config get registry  //查看源',
            'npm config set registry https://registry.npmmirror.com/  //设置npm源',
            'https://mirrors.sjtug.sjtu.edu.cn/git/crates.io-index  //cargo sjtu源',
            'https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git  //cargo tsinghua源',
            'https://mirrors.ustc.edu.cn/ubuntu/  //ubuntu源 中科大',
            'http://mirrors.aliyun.com/ubuntu/  //ubuntu源 阿里云',
            '',
            '',
            '',
            ''
        ]
    }, {
        value: '1',
        title: 'Node',
        content: [
            'npm create vue //创建vue项目',
            'npm create vite@latest  //创建一个基于vite的项目',
            'npm i pnpm -g //安装',
            'npm install npm -g //升级npm',
            'pnpm -v //查看版本',
            'pnpm add -g pnpm to update //升级',
            'pnpm config get registry //查看源',
            'pnpm config set registry https://registry.npmmirror.com //切换源',
            'pnpm install //安装项目依赖',
            'pnpm run dev //运行项目',
            'pnpm run build  //构建项目',
            'npm install -g http-server  //安装http-server',
            'http-server --cors  //运行dist所在的vue项目打包文件',
            'npm run tauri android init  //初始化项目android相关资源',
            'npm run tauri dev  //运行tauri项目',
            'npm run tauri android dev  //运行项目为android'
        ]
    }, {
        value: '2',
        title: 'Linux',
        content: [
            'uname -m  //确认处理器架构 [aarch64,armv8l]:arm64、[x86_64]:amd64、[i386,i686]:i386、[arm,armel]:arm_garbage、[mips]:mips*、[mips64]:mips64*',
            "echo -n I | hexdump -o | awk '{print substr($2,6,1); exit}'  \\确认处理器字节序 0:mips/mips64、1:mipsle/mips64le",
            "echo -n I | od -to2 | awk '{print substr($2,6,1); exit}'  \\确认处理器字节序",
            'sudo passwd root  //如果是新的系统需要设置一下root账户的密码',
            'sudo passwd --unlock root  //解锁root账户',
            'chmod 777 xxxx  //设置777权限',
            "if [[ `/sbin/init --version` =~ upstart ]]; then echo Upstart; elif [[ `systemctl` =~ -\.mount ]]; then echo Systemd; elif [[ -f /etc/init.d/cron && ! -h /etc/init.d/cron ]]; then echo SysV-Init; else echo Unknown; fi/sbin/init: unrecognized option '--version'  \\Systemd",
            'sudo nano /etc/apt/sources.list  //查看ubuntu系统源',
            'df -h  //磁盘使用情况，看不到未启用的磁盘',
            'lsblk  //查看磁盘总大小，可以看见未挂载的磁盘',
            'lvextend -l +100%FREE /dev/mapper/ubuntu--vg-ubuntu--lv  //将磁盘剩余空间扩容到该路径',
            'resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv  //重新计算磁盘大小',
            'fdisk -l  //查看物理磁盘',
            'mkfs -t ext4 /dev/sda1  //将 sda1 分区格式化为 ext4 格式',
            'sudo mkdir /mnt/dir01  //创建一个目录',
            'sudo nano /etc/fstab  //编辑/etc/fstab文件',
            '/dev/sda1 /mnt/dir01 ext4 defaults 0 0  //在/etc/fstab文件的末尾添加一行此内容',
            'sudo mount -a  //尝试挂载所有的fstab条目',
            'df -h  //检查磁盘是否已经挂载',
            'sudo chmod -R 777 /mnt/dir01  //给目录赋予权限',
            ''
        ]
    }, {
        value: '3',
        title: 'Git',
        content: [
            'git config -l  //查看git配置',
            'git config --global user.name "username"  //配置git用户名',
            'git config --global user.email useremail@xx.com   //配置git邮箱',
            'git init  //初始化',
            'git branch -M main  //修改主分支名称为main(可能是master这个单词不让用了)(可能会报错使用下面的)',
            'git checkout -b main  //新建了一个main分支,并切换到main分支',
            'git add .  //添加目录文件到本地git',
            'git commit -m "备注"  //提交添加的文件到本地git,并为本次提交添加备注信息',
            'git remote -v  //查看远程主机地址信息及别名(别名一般默认origin)',
            'git remote add origin https://github.com/xxx/xxx.git  //关联该项目到远程地址',
            'git push -u origin main  //上传本地git文件到远端关联的git',
            'git clone https://xxxxx.git  //克隆远程仓库',
            'git status   //查看Git管理的文件的改动',
            'git status [filename]  //查看特定文件',
            'git branch  //查看所有分支',
            'git branch dev  //新建了一个dev分支,但仍然停留在当前分支',
            'git checkout -b dev  //新建了一个dev分支,并切换到dev分支',
            'git merge dev  //合并dev分支到当前分支',
            'git branch -d dev  //删除dev分支',
            'git push origin --delete dev  //删除远程分支',
            'git branch -dr dev  //删除远程分支',
            'Untracked  //没有被跟踪，表示新建的文件没有添加到暂存区',
            'committed  //待提交，表示文件在暂存区等待提交',
            ''
        ]
    }, {
        value: '4',
        title: 'Net6',
        content: [
            'dotnet --list-sdks  //查看环境是否存在dotnet',
            'dotnet new webapi -f net6.0  //创建模板ASP.NET Core Web API',
            'dotnet run  //运行项目',
            'dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 7.0.0  //添加依赖'
        ]
    }, {
        value: '5',
        title: 'Rust',
        content: [
            'cargo tauri info  //检查环境',
            'cargo install cargo-update  //更新cargo',
            'rustup show  //查看rust',
            'rustup update  //升级所有已安装的工具链',
            'rustup self update  //升级rustup自身',
            'cargo install create-tauri-app  //安装tauri到最新版本',
            "C:\\Users\\username\\.cargo\\.crates.toml //cargo换源 https://mirrors.sjtug.sjtu.edu.cn/git/crates.io-index 、 https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git",
            'rustc --version  //查看版本',
            'cargo create-tauri-app  //利用之前安装的 create-tauri-app 工具来创建一个新的 Tauri 应用项目',
            'cargo tauri build   //编译',
            'cargo tauri dev   //运行',
            'cargo install tauri-cli   //安装 Tauri 命令行工具 tauri-cli',
            'cargo tauri init   //初始化一个现有的项目为 Tauri 应用'
        ]
    }, {
        value: '6',
        title: 'Blender',
        content: [
            'X 删除模型, Shift+D 移动并复制, A 全选所有, Ctrl+空格 最大化显示主界面, F12 渲染项目, Tab 切换编辑模式和物体模式',
            'Ctrl+I 反选, Shift 多选, Alt+Z 透视模式,可以选中背面的元素',
            'Shift+A 添加一个新的几何体,要在物体模式下创建几何体,他才会是一个新的几何体,编辑模式下会被当做某个几何体的一部分,选中一个就都会被选中',
            '鼠标中键 滚动是缩放,按住拖动是观察,按住shift+鼠标中键是平移操作',
            'G 移动, S 缩放, R 旋转, 可以同时和xyz一起使用,表明只操作该方向',
            'H 可以隐藏选中物体, Shift+H 隐藏未被选中的物体, Alt+H 显示所有物体',
            '选中工具,`B`框选,`C`刷选,`L`锁套选,`W`调整,点击`W`也可以循环切换四种模式',
            'W 选中一个物体,可以移动. B 以框的形式选中多个物体,不可移动. L 以自定义锁套的形式选中多个物体. C 按住鼠标左键，移动经过的物体会被选中',
            '按住`~`会出现视图选择,有小键盘可以直接快捷键控制视图',
            '游标,在空间中标记一个位置,新创建的物体会在游标处出现,通过`Shift+S`来对游标添加操作,`Shift+右键`移动游标位置,`Shift+C`可以恢复游标到初始位置',
            '游标也是轴心点,物体的旋转除了可以根据自身的原点,也可以根据轴心点',
            '局部坐标和全局坐标,全局是固定不变的,局部是物体被创建的时候自带的,是可以被改变的方向的',
            '在我们使用`G+Z`移动物体时,第一次是全局坐标,`G+Z+Z`是局部坐标.也就是在G的模式下,Z可以切换全局坐标和局部坐标,在G的模式下按住`Ctrl`会以方格为单位进行吸附',
            '渲染器EEVEE、CYCLES,EEVEE快,光影表现欠佳,CYCLES慢,更逼真',
            '选中原材质,目标材质,Ctrl+L会将目标材质设置为原材质',
            '按住`Ctrl`可以将两次选则之间最短路径经过的元素都选中,L是选中和选中元素相连的所有元素,按住`Alt`点击可以选中相连的一圈元素,',
            'Ctrl+Alt 选中一圈元素条件放宽, Ctrl 小键盘+ 扩大选中范围, Ctrl 小键盘- 缩小选中范围',
            '编辑模式选中一个面,`E`挤出并移动一个面,`Ctrl+鼠标右键`更方便快速连续的挤出一个面,`I`向内挤出,按住`Ctrl`会控制挤出深度',
            '编辑模式选中一条线,`Ctrl+B`倒角,滚动控制细分程度',
            '编辑模式`Ctrl+R`循环切割线,滚轮控制线的数量,点一次之后确定数量,开始调整位置',
            'M合并,`V`断开,`F`填充,`K`切刀,`Ctrl+E`桥接,`Ctrl+J`将两个物体变成一个物体,桥接要先将两个物体变成一个物体才能桥接,`P`分离',
            '选择子级物体，按住`Shift`选择父级物体`ctrl+P`，设置父级目标，拖动父级时子级会跟着一起动',
            '',
            '',
            ''

        ]
    }];