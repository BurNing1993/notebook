# Docker

## 安装

- [centos](https://docs.docker.com/engine/install/centos/)

- [ubuntu](https://docs.docker.com/engine/install/ubuntu/)

## 常用命令

1. docker images 镜像列表

```sh
docker images #镜像列表
-a #列出本地所有的镜像（含中间映像层）
-q #只显示镜像ID。
--digests #显示镜像的摘要信息
--no-trunc # 显示完整的镜像信息
```

2. docker search xx 搜索镜像

```sh
docker search tomcat # 搜索tomcat镜像
----filter stars=num
docker search --filter stars=30 tomcat # 搜索start>30的tomcat镜像
```

3. docker pull image [:TAG]


4. docker rmi  imageID 删除镜像

```sh
docker rmi -f $(docker images -qa) # 删除全部镜像
```

## Dockerfile

Dockerfile是用来构建Docker镜像的构建文件，是由一系列命令和参数构成的脚本。

### 构建步骤

- 编写Dockerfile文件
- docker build [-f DockerfilePath] -t imageName:tag .

### 关键字

- FROM  基础镜像，当前新镜像是基于哪个镜像的
- MAINTAINER   镜像维护者的姓名和邮箱地址
- RUN   容器构建时需要运行的命令
- EXPOSE   当前容器对外暴露出的端口
- WORKDIR   指定在创建容器后，终端默认登陆的进来工作目录，一个落脚点
- ENV   用来在构建镜像过程中设置环境变量
- ADD   将宿主机目录下的文件拷贝进镜像且ADD命令会自动处理URL和解压tar压缩包
- COPY   将从构建上下文目录中 <源路径> 的文件/目录复制到新的一层的镜像内的 <目标路径> 位置
- VOLUME   容器数据卷，用于数据保存和持久化工作
- CMD   指定一个容器启动时要运行的命令 Dockerfile 中可以有多个 CMD 指令，但只有最后一个生效，CMD 会被 docker run 之后的参数替换
- ENTRYPOINT​ 指定一个容器启动时要运行的命令 ENTRYPOINT 的目的和CMD一样，都是在指定容器启动程序及参数
- ONBUILD 当构建一个被继承的Dockerfile时运行命令，父镜像在被子继承后父镜像的onbuild被触发
