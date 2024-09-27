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
            'pnpm -v //查看版本',
            'pnpm add -g pnpm to update //升级',
            'pnpm config get registry //查看源',
            'pnpm config set registry https://registry.npmmirror.com //切换源',
            'pnpm install //安装项目依赖',
            'pnpm run dev //运行项目',
            'pnpm run build  //构建项目',
            'npm install -g http-server  //安装http-server',
            'http-server --cors  //运行dist所在的vue项目打包文件'
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
            '',
            '',
            ''
        ]
    }];