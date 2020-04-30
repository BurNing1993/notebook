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


