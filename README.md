# NodeBook
Project learning report

from Oct 17,2017

[markdown语法](https://github.com/BurNing1993/Daily-Report/blob/master/markdown/md_grammar.md)

十月：

   16
   [17](https://github.com/BurNing1993/Daily-Report/blob/master/October/Oct%2017.md)
   [18]()
   [19]()
   [20]()
   
   [23](https://github.com/BurNing1993/Daily-Report/blob/master/October/Oct%2017.md)   [18]()  [19]()  [20]()  [21]()
   
   
   需求详见附件，请新勇帮忙录入到社区

其他资料
FlexVolume: https://github.com/kubernetes/community/blob/master/contributors/devel/flexvolume.md
fuxi-kubernetes: https://github.com/openstack/fuxi-kubernetes
opensds-k8s: https://github.com/leonwanghui/opensds-k8s

Modules	Features	Priority	Status	Target Status	Owners (github id)	Reviewers (github id)	Planned Completion Date	Related Issues
Framework	Base framework, CI	High	NotReady	Done			2017.11.3	
FlexVolume Interface	init: Initializes flex volume driver	High	NotReady	Done			2017.11.17	
	attach: Attach the volume specified by the given spec on the given host	High	NotReady	Done			2017.11.17	
	detach:Detach the volume from the Kubelet node.	High	NotReady	Done			2017.11.17	
	waitforattach:Wait for the volume to be attached on the remote node.	High	NotReady	Done			2017.11.17	
	isattached:Check the volume is attached on the node. Called from both Kubelet & Controller manager.	High	NotReady	Done			2017.11.17	
	mountdevice: Mount device mounts the device to a global path which individual pods can then bind mount. 	High	NotReady	Done			2017.11.17	
	unmountdevice: Unmounts the global mount for the device.	High	NotReady	Done			2017.11.17	
	mount:Mount the volume at the mount dir. 	High	NotReady	Done			2017.11.17	
	unmount:Unmount the volume. 	High	NotReady	Done			2017.11.17	
E2E	Add E2E tests for flex volume driver that cover all interfaces	Medium	NotReady	Done			2017.11.24	
Environment	Build 	High	NotReady	Done			2017.11.24	
	Deploy	High	NotReady	Done			2017.11.24	
	Test	High	NotReady	Done			2017.11.24	
	Release	High	NotReady	Done			2017.11.30	
