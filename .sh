1.INSTALL KUBECTL

2.INSTALL MINIKUBE USING HYPEV VM

minikube status

type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured

 minikube ip
 172.17.217.79


 minikube ssh

  kubectl cluster-info
Kubernetes control plane is running at https://172.17.217.79:8443
CoreDNS is running at https://172.17.217.79:8443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

kubectl get nodes

docker build . -t devngecu/k8s-web-hello