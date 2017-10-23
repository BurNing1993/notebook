#Centos7部署Kubernetes集群
###	环境介绍及准备
####	物理机操作系统
物理机操作系统采用Centos7.3 64位（查看操作系统信息）

    [root@localhost ~]# uname -a
    [root@localhost ~]# cat  /etc/redhat-release 

####	主机信息
准备三台机器用于部署k8s的运行环境：

  节点及功能	|主机名	|IP
   ------|-----|-----
  Master、etcd、registry	| K8s-master |	10.0.251.148
  Node1	| K8s-node-1	| 10.0.251.153
  Node2	| K8s-node-2	| 10.0.251.155

设置三台机器的主机名：
	Master上执行：
	
    [root@localhost ~]#  hostnamectl --static set-hostname  k8s-master
Node1上执行：

     [root@localhost ~]# hostnamectl --static set-hostname  k8s-node-1
同理设置Node2的主机名。

在三台机器上设置hosts，均执行如下命令：

    echo '10.0.251.148    k8s-master
    10.0.251.148   etcd
    10.0.251.148   registry
    10.0.251.153   k8s-node-1
    10.0.251.155    k8s-node-2' >> /etc/hosts
关闭三台机器的防火墙

    systemctl disable firewalld.service
    systemctl stop firewalld.service


####	部署etcd
K8s运行依赖etcd，需要先部署etcd，采用yum方式安装：

     [root@localhost ~]# yum install etcd –y
Yum安装的etcd默认配置文件在/etc/etcd/etcd.conf。编辑配置文件。

     [root@localhost ~]# vi /etc/etcd/etcd.conf

    # [member]
     #节点名称
    ETCD_NAME=master
    ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
    #ETCD_WAL_DIR=""
    #ETCD_SNAPSHOT_COUNT="10000"
    #ETCD_HEARTBEAT_INTERVAL="100"
    #ETCD_ELECTION_TIMEOUT="1000"
    #监听其他etcd实例的地址
    #ETCD_LISTEN_PEER_URLS=http://0.0.0.0:2380
    #监听客户端地址
    ETCD_LISTEN_CLIENT_URLS="http://0.0.0.0:2379,http://0.0.0.0:4001"
    #ETCD_MAX_SNAPSHOTS="5"
    #ETCD_MAX_WALS="5"
    #ETCD_CORS=""
     #
    #[cluster]
    #通知其他etcd的实例地址
    #ETCD_INITIAL_ADVERTISE_PEER_URLS="http://localhost:2380"
    # if you use different ETCD_NAME (e.g. test), set ETCD_INITIAL_CLUSTER value for this name, i.e. "test=http://..."
    #ETCD_INITIAL_CLUSTER="default=http://localhost:2380"
    #ETCD_INITIAL_CLUSTER_STATE="new"
    #初始化集群token
    #ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
    #通知客户端地址
    ETCD_ADVERTISE_CLIENT_URLS="http://etcd:2379,http://etcd:4001"
    #ETCD_DISCOVERY=""
    #ETCD_DISCOVERY_SRV=""
    #ETCD_DISCOVERY_FALLBACK="proxy"
    #ETCD_DISCOVERY_PROXY=""
		
启动并验证状态

    [root@localhost ~]# systemctl start etcd
    [root@localhost ~]#  etcdctl set testdir/testkey0 0
    [root@localhost ~]#  etcdctl get testdir/testkey0 
    [root@localhost ~]# etcdctl -C http://etcd:4001 cluster-health
    member 8e9e05c52164694d is healthy: got healthy result from http://0.0.0.0:2379
    cluster is healthy
    [root@localhost ~]# etcdctl -C http://etcd:2379 cluster-health
    member 8e9e05c52164694d is healthy: got healthy result from http://0.0.0.0:2379
    cluster is healthy

####部署master
安装Docker

    [root@k8s-master ~]# yum install docker
配置Docker配置文件，使其允许从registry中拉取镜像。

    [root@k8s-master ~]# vim /etc/sysconfig/docker

    # /etc/sysconfig/docker
    
    # Modify these options if you want to change the way the docker daemon runs
    OPTIONS='--selinux-enabled --log-driver=journald --signature-verification=false'
    if [ -z "${DOCKER_CERT_PATH}" ]; then
        DOCKER_CERT_PATH=/etc/docker
    fi
    OPTIONS='--insecure-registry registry:5000'

设置开机自启动并开启服务

    [root@k8s-master ~]# chkconfig docker on
    [root@k8s-master ~]# service docker start
安装kubernets

    [root@k8s-master ~]# yum install kubernetes

配置并启动kubernets
在kubernets master上需要运行以下组件：

    Kubernets  API Server
    Kubernets  Controller Manager
    Kubernets  Scheduler

更改相应的配置：
/etc/kubernetes/apiserver

    [root@k8s-master ~]# vim /etc/kubernetes/apiserver
    
    ###
    # kubernetes system config
    #
    # The following values are used to configure the kube-apiserver
    #
    
    # The address on the local server to listen to.
    KUBE_API_ADDRESS="--insecure-bind-address=0.0.0.0"
    
    # The port on the local server to listen on.
    KUBE_API_PORT="--port=8080"
    
    # Port minions listen on
    # KUBELET_PORT="--kubelet-port=10250"
    
    # Comma separated list of nodes in the etcd cluster
    KUBE_ETCD_SERVERS="--etcd-servers=http://etcd:2379"
    
    # Address range to use for services
    KUBE_SERVICE_ADDRESSES="--service-cluster-ip-range=10.254.0.0/16"
    
    # default admission control policies
    #KUBE_ADMISSION_CONTROL="--admission-control=NamespaceLifecycle,NamespaceExists,LimitRanger,SecurityContextDeny,ServiceAccount,ResourceQuota"
    KUBE_ADMISSION_CONTROL="--admission-control=NamespaceLifecycle,NamespaceExists,LimitRanger,SecurityContextDeny,ResourceQuota"
    
    # Add your own!
    KUBE_API_ARGS=""

/etc/kubernetes/config

    [root@k8s-master ~]# vim /etc/kubernetes/config
    
    ###
    # kubernetes system config
    #
    # The following values are used to configure various aspects of all
    # kubernetes services, including
    #
    #   kube-apiserver.service
    #   kube-controller-manager.service
    #   kube-scheduler.service
    #   kubelet.service
    #   kube-proxy.service
    # logging to stderr means we get it in the systemd journal
    KUBE_LOGTOSTDERR="--logtostderr=true"
    
    # journal message level, 0 is debug
    KUBE_LOG_LEVEL="--v=0"
    
    # Should this cluster be allowed to run privileged docker containers
    KUBE_ALLOW_PRIV="--allow-privileged=false"
    
    # How the controller-manager, scheduler, and proxy find the apiserver
    KUBE_MASTER="--master=http://k8s-master:8080"

启动服务并设置开机自启动

    [root@k8s-master ~]# systemctl enable kube-apiserver.service
    [root@k8s-master ~]# systemctl start kube-apiserver.service
    [root@k8s-master ~]# systemctl enable kube-controller-manager.service
    [root@k8s-master ~]# systemctl start kube-controller-manager.service
    [root@k8s-master ~]# systemctl enable kube-scheduler.service
    [root@k8s-master ~]# systemctl start kube-scheduler.service



4.	配置node
1)	安装Docker
2)	安装Kubernets 
3)	配置并启动Kubernets
在Kubernets node上需要运行以下组件：
	Kubelet
	Kubernets Proxy
4)	更改相应配置
a.	/etc/kubernetes/config 
[root@K8s-node-1 ~]# vim /etc/kubernetes/config

###
# kubernetes system config
#
# The following values are used to configure various aspects of all
# kubernetes services, including
#
#   kube-apiserver.service
#   kube-controller-manager.service
#   kube-scheduler.service
#   kubelet.service
#   kube-proxy.service
# logging to stderr means we get it in the systemd journal
KUBE_LOGTOSTDERR="--logtostderr=true"

# journal message level, 0 is debug
KUBE_LOG_LEVEL="--v=0"

# Should this cluster be allowed to run privileged docker containers
KUBE_ALLOW_PRIV="--allow-privileged=false"

# How the controller-manager, scheduler, and proxy find the apiserver
KUBE_MASTER="--master=http://k8s-master:8080"
b.	/etc/kubernetes/kubelet
[root@K8s-node-1 ~]# vim /etc/kubernetes/kubelet

###
# kubernetes kubelet (minion) config

# The address for the info server to serve on (set to 0.0.0.0 or "" for all interfaces)
KUBELET_ADDRESS="--address=0.0.0.0"

# The port for the info server to serve on
# KUBELET_PORT="--port=10250"

# You may leave this blank to use the actual hostname
KUBELET_HOSTNAME="--hostname-override=k8s-node-1"

# location of the api-server
KUBELET_API_SERVER="--api-servers=http://k8s-master:8080"

# pod infrastructure container
KUBELET_POD_INFRA_CONTAINER="--pod-infra-container-image=registry.access.redhat.com/rhel7/pod-infrastructure:latest"

# Add your own!
KUBELET_ARGS=""

c.	启动服务并设置开机自启动
[root@k8s-master ~]# systemctl enable kubelet.service
[root@k8s-master ~]# systemctl start kubelet.service
[root@k8s-master ~]# systemctl enable kube-proxy.service
[root@k8s-master ~]# systemctl start kube-proxy.service
5)	查看状态
在master上查看集群中节点及节点状态
[root@k8s-master ~]#  kubectl -s http://k8s-master:8080 get node
[root@k8s-master ~]# kubectl get nodes

至此，已经搭建了一个kubernetes集群，但目前该集群还不能很好的工作，还需要后续的步骤。
5.	创建覆盖网络—Flannel
1)	安装Flannel
在master、node均安装Flannel
[root@k8s-master ~]# yum install flannel
2)	配置Flannel
Master、node均修改/etc/sysconfig/flannel
[root@k8s-master ~]# vi /etc/sysconfig/flanneld

# Flanneld configuration options

# etcd url location.  Point this to the server where etcd runs
FLANNEL_ETCD_ENDPOINTS="http://etcd:2379"

# etcd config key.  This is the configuration key that flannel queries
# For address range assignment
FLANNEL_ETCD_PREFIX="/atomic.io/network"

# Any additional options that you want to pass
#FLANNEL_OPTIONS=""
3)	配置etcd中关于flannel的key
Flannel使用etcd进行配置，来保证多个Flannel实例之间的一致性，所以需要在etcd上进行配置：（’/atomic,io/network/config’这个key于上面的/etc/sysconfig/flannel中的配置项FLANNEL_ETCD_PREFIX是相对的，错误的话启动就会出错）
[root@k8s-master ~]# etcdctl mk /atomic.io/network/config '{ "Network": "10.0.0.0/16" }'
{ "Network": "10.0.0.0/16" }
4)	启动
在启动Flannel之后，需要依次重启docker、kubernetes
在master上执行：
systemctl enable flanneld.service 
systemctl start flanneld.service 
service docker restart
systemctl restart kube-apiserver.service
systemctl restart kube-controller-manager.service
systemctl restart kube-scheduler.service
在node上执行：
systemctl enable flanneld.service 
systemctl start flanneld.service 
service docker restart
systemctl restart kubelet.service
systemctl restart kube-proxy.service



###hell0
		

