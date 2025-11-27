import { WebTamperEventClusterInfo } from './WebTamperEventClusterInfo';
import { WebTamperEventHostInfo } from './WebTamperEventHostInfo';


export class WebTamperProtectionContainerResponseInfo {
    public status?: string;
    private 'container_id'?: string;
    private 'container_name'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'pod_name'?: string;
    private 'pod_ip'?: string;
    public namespace?: string;
    private 'all_directory_nums'?: number;
    private 'protected_directory_nums'?: number;
    private 'host_info'?: WebTamperEventHostInfo;
    private 'cluster_info'?: WebTamperEventClusterInfo;
    public constructor() { 
    }
    public withStatus(status: string): WebTamperProtectionContainerResponseInfo {
        this['status'] = status;
        return this;
    }
    public withContainerId(containerId: string): WebTamperProtectionContainerResponseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): WebTamperProtectionContainerResponseInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withImageName(imageName: string): WebTamperProtectionContainerResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): WebTamperProtectionContainerResponseInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withPodName(podName: string): WebTamperProtectionContainerResponseInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withPodIp(podIp: string): WebTamperProtectionContainerResponseInfo {
        this['pod_ip'] = podIp;
        return this;
    }
    public set podIp(podIp: string  | undefined) {
        this['pod_ip'] = podIp;
    }
    public get podIp(): string | undefined {
        return this['pod_ip'];
    }
    public withNamespace(namespace: string): WebTamperProtectionContainerResponseInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withAllDirectoryNums(allDirectoryNums: number): WebTamperProtectionContainerResponseInfo {
        this['all_directory_nums'] = allDirectoryNums;
        return this;
    }
    public set allDirectoryNums(allDirectoryNums: number  | undefined) {
        this['all_directory_nums'] = allDirectoryNums;
    }
    public get allDirectoryNums(): number | undefined {
        return this['all_directory_nums'];
    }
    public withProtectedDirectoryNums(protectedDirectoryNums: number): WebTamperProtectionContainerResponseInfo {
        this['protected_directory_nums'] = protectedDirectoryNums;
        return this;
    }
    public set protectedDirectoryNums(protectedDirectoryNums: number  | undefined) {
        this['protected_directory_nums'] = protectedDirectoryNums;
    }
    public get protectedDirectoryNums(): number | undefined {
        return this['protected_directory_nums'];
    }
    public withHostInfo(hostInfo: WebTamperEventHostInfo): WebTamperProtectionContainerResponseInfo {
        this['host_info'] = hostInfo;
        return this;
    }
    public set hostInfo(hostInfo: WebTamperEventHostInfo  | undefined) {
        this['host_info'] = hostInfo;
    }
    public get hostInfo(): WebTamperEventHostInfo | undefined {
        return this['host_info'];
    }
    public withClusterInfo(clusterInfo: WebTamperEventClusterInfo): WebTamperProtectionContainerResponseInfo {
        this['cluster_info'] = clusterInfo;
        return this;
    }
    public set clusterInfo(clusterInfo: WebTamperEventClusterInfo  | undefined) {
        this['cluster_info'] = clusterInfo;
    }
    public get clusterInfo(): WebTamperEventClusterInfo | undefined {
        return this['cluster_info'];
    }
}