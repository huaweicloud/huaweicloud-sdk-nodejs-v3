

export class VulAffectImageContainersResponseInfo {
    private 'container_name'?: string;
    private 'container_id'?: string;
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'host_name'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'pod_name'?: string;
    private 'pod_id'?: string;
    public namespace?: string;
    public constructor() { 
    }
    public withContainerName(containerName: string): VulAffectImageContainersResponseInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withContainerId(containerId: string): VulAffectImageContainersResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withClusterName(clusterName: string): VulAffectImageContainersResponseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): VulAffectImageContainersResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withHostName(hostName: string): VulAffectImageContainersResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPublicIp(publicIp: string): VulAffectImageContainersResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): VulAffectImageContainersResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPodName(podName: string): VulAffectImageContainersResponseInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withPodId(podId: string): VulAffectImageContainersResponseInfo {
        this['pod_id'] = podId;
        return this;
    }
    public set podId(podId: string  | undefined) {
        this['pod_id'] = podId;
    }
    public get podId(): string | undefined {
        return this['pod_id'];
    }
    public withNamespace(namespace: string): VulAffectImageContainersResponseInfo {
        this['namespace'] = namespace;
        return this;
    }
}