import { ContainerMountInfo } from './ContainerMountInfo';
import { ContainerPortInfo } from './ContainerPortInfo';
import { ServerlessAssetBaseInfo } from './ServerlessAssetBaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerlessAssetDetailResponse extends SdkResponse {
    private 'container_id'?: string;
    private 'container_name'?: string;
    private 'container_status'?: string;
    private 'workload_id'?: string;
    private 'workload_name'?: string;
    private 'workload_type'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public namespace?: string;
    private 'pod_id'?: string;
    private 'pod_name'?: string;
    private 'pod_ip'?: string;
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'create_time'?: number;
    public labels?: string;
    private 'cpu_limit'?: string;
    private 'memory_limit'?: string;
    public command?: string;
    public args?: string;
    private 'working_dir'?: string;
    private 'port_info'?: Array<ContainerPortInfo>;
    private 'mount_list'?: Array<ContainerMountInfo>;
    public constructor() { 
        super();
    }
    public withContainerId(containerId: string): ListServerlessAssetDetailResponse {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): ListServerlessAssetDetailResponse {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withContainerStatus(containerStatus: string): ListServerlessAssetDetailResponse {
        this['container_status'] = containerStatus;
        return this;
    }
    public set containerStatus(containerStatus: string  | undefined) {
        this['container_status'] = containerStatus;
    }
    public get containerStatus(): string | undefined {
        return this['container_status'];
    }
    public withWorkloadId(workloadId: string): ListServerlessAssetDetailResponse {
        this['workload_id'] = workloadId;
        return this;
    }
    public set workloadId(workloadId: string  | undefined) {
        this['workload_id'] = workloadId;
    }
    public get workloadId(): string | undefined {
        return this['workload_id'];
    }
    public withWorkloadName(workloadName: string): ListServerlessAssetDetailResponse {
        this['workload_name'] = workloadName;
        return this;
    }
    public set workloadName(workloadName: string  | undefined) {
        this['workload_name'] = workloadName;
    }
    public get workloadName(): string | undefined {
        return this['workload_name'];
    }
    public withWorkloadType(workloadType: string): ListServerlessAssetDetailResponse {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): string | undefined {
        return this['workload_type'];
    }
    public withClusterId(clusterId: string): ListServerlessAssetDetailResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ListServerlessAssetDetailResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withNamespace(namespace: string): ListServerlessAssetDetailResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withPodId(podId: string): ListServerlessAssetDetailResponse {
        this['pod_id'] = podId;
        return this;
    }
    public set podId(podId: string  | undefined) {
        this['pod_id'] = podId;
    }
    public get podId(): string | undefined {
        return this['pod_id'];
    }
    public withPodName(podName: string): ListServerlessAssetDetailResponse {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withPodIp(podIp: string): ListServerlessAssetDetailResponse {
        this['pod_ip'] = podIp;
        return this;
    }
    public set podIp(podIp: string  | undefined) {
        this['pod_ip'] = podIp;
    }
    public get podIp(): string | undefined {
        return this['pod_ip'];
    }
    public withImageId(imageId: string): ListServerlessAssetDetailResponse {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): ListServerlessAssetDetailResponse {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withCreateTime(createTime: number): ListServerlessAssetDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLabels(labels: string): ListServerlessAssetDetailResponse {
        this['labels'] = labels;
        return this;
    }
    public withCpuLimit(cpuLimit: string): ListServerlessAssetDetailResponse {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: string  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): string | undefined {
        return this['cpu_limit'];
    }
    public withMemoryLimit(memoryLimit: string): ListServerlessAssetDetailResponse {
        this['memory_limit'] = memoryLimit;
        return this;
    }
    public set memoryLimit(memoryLimit: string  | undefined) {
        this['memory_limit'] = memoryLimit;
    }
    public get memoryLimit(): string | undefined {
        return this['memory_limit'];
    }
    public withCommand(command: string): ListServerlessAssetDetailResponse {
        this['command'] = command;
        return this;
    }
    public withArgs(args: string): ListServerlessAssetDetailResponse {
        this['args'] = args;
        return this;
    }
    public withWorkingDir(workingDir: string): ListServerlessAssetDetailResponse {
        this['working_dir'] = workingDir;
        return this;
    }
    public set workingDir(workingDir: string  | undefined) {
        this['working_dir'] = workingDir;
    }
    public get workingDir(): string | undefined {
        return this['working_dir'];
    }
    public withPortInfo(portInfo: Array<ContainerPortInfo>): ListServerlessAssetDetailResponse {
        this['port_info'] = portInfo;
        return this;
    }
    public set portInfo(portInfo: Array<ContainerPortInfo>  | undefined) {
        this['port_info'] = portInfo;
    }
    public get portInfo(): Array<ContainerPortInfo> | undefined {
        return this['port_info'];
    }
    public withMountList(mountList: Array<ContainerMountInfo>): ListServerlessAssetDetailResponse {
        this['mount_list'] = mountList;
        return this;
    }
    public set mountList(mountList: Array<ContainerMountInfo>  | undefined) {
        this['mount_list'] = mountList;
    }
    public get mountList(): Array<ContainerMountInfo> | undefined {
        return this['mount_list'];
    }
}