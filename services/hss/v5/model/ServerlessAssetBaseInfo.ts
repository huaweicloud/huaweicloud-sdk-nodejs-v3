

export class ServerlessAssetBaseInfo {
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
    public constructor() { 
    }
    public withContainerId(containerId: string): ServerlessAssetBaseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): ServerlessAssetBaseInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withContainerStatus(containerStatus: string): ServerlessAssetBaseInfo {
        this['container_status'] = containerStatus;
        return this;
    }
    public set containerStatus(containerStatus: string  | undefined) {
        this['container_status'] = containerStatus;
    }
    public get containerStatus(): string | undefined {
        return this['container_status'];
    }
    public withWorkloadId(workloadId: string): ServerlessAssetBaseInfo {
        this['workload_id'] = workloadId;
        return this;
    }
    public set workloadId(workloadId: string  | undefined) {
        this['workload_id'] = workloadId;
    }
    public get workloadId(): string | undefined {
        return this['workload_id'];
    }
    public withWorkloadName(workloadName: string): ServerlessAssetBaseInfo {
        this['workload_name'] = workloadName;
        return this;
    }
    public set workloadName(workloadName: string  | undefined) {
        this['workload_name'] = workloadName;
    }
    public get workloadName(): string | undefined {
        return this['workload_name'];
    }
    public withWorkloadType(workloadType: string): ServerlessAssetBaseInfo {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): string | undefined {
        return this['workload_type'];
    }
    public withClusterId(clusterId: string): ServerlessAssetBaseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ServerlessAssetBaseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withNamespace(namespace: string): ServerlessAssetBaseInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withPodId(podId: string): ServerlessAssetBaseInfo {
        this['pod_id'] = podId;
        return this;
    }
    public set podId(podId: string  | undefined) {
        this['pod_id'] = podId;
    }
    public get podId(): string | undefined {
        return this['pod_id'];
    }
    public withPodName(podName: string): ServerlessAssetBaseInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withPodIp(podIp: string): ServerlessAssetBaseInfo {
        this['pod_ip'] = podIp;
        return this;
    }
    public set podIp(podIp: string  | undefined) {
        this['pod_ip'] = podIp;
    }
    public get podIp(): string | undefined {
        return this['pod_ip'];
    }
    public withImageId(imageId: string): ServerlessAssetBaseInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): ServerlessAssetBaseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withCreateTime(createTime: number): ServerlessAssetBaseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLabels(labels: string): ServerlessAssetBaseInfo {
        this['labels'] = labels;
        return this;
    }
}