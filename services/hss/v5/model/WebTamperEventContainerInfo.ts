

export class WebTamperEventContainerInfo {
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'container_id'?: string;
    private 'container_name'?: string;
    private 'pod_name'?: string;
    private 'pod_ip'?: string;
    public namespace?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public constructor() { 
    }
    public withImageName(imageName: string): WebTamperEventContainerInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): WebTamperEventContainerInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withContainerId(containerId: string): WebTamperEventContainerInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): WebTamperEventContainerInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withPodName(podName: string): WebTamperEventContainerInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withPodIp(podIp: string): WebTamperEventContainerInfo {
        this['pod_ip'] = podIp;
        return this;
    }
    public set podIp(podIp: string  | undefined) {
        this['pod_ip'] = podIp;
    }
    public get podIp(): string | undefined {
        return this['pod_ip'];
    }
    public withNamespace(namespace: string): WebTamperEventContainerInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withClusterId(clusterId: string): WebTamperEventContainerInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): WebTamperEventContainerInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
}