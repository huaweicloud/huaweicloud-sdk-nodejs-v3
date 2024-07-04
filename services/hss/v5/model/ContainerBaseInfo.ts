

export class ContainerBaseInfo {
    private 'container_id'?: string;
    private 'container_name'?: string;
    private 'image_name'?: string;
    public status?: string;
    private 'create_time'?: number;
    private 'cpu_limit'?: string;
    private 'memory_limit'?: string;
    private 'restart_count'?: number;
    private 'pod_name'?: string;
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_type'?: string;
    public risky?: boolean;
    private 'low_risk'?: number;
    private 'medium_risk'?: number;
    private 'high_risk'?: number;
    private 'fatal_risk'?: number;
    public constructor() { 
    }
    public withContainerId(containerId: string): ContainerBaseInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): ContainerBaseInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withImageName(imageName: string): ContainerBaseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withStatus(status: string): ContainerBaseInfo {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: number): ContainerBaseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCpuLimit(cpuLimit: string): ContainerBaseInfo {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: string  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): string | undefined {
        return this['cpu_limit'];
    }
    public withMemoryLimit(memoryLimit: string): ContainerBaseInfo {
        this['memory_limit'] = memoryLimit;
        return this;
    }
    public set memoryLimit(memoryLimit: string  | undefined) {
        this['memory_limit'] = memoryLimit;
    }
    public get memoryLimit(): string | undefined {
        return this['memory_limit'];
    }
    public withRestartCount(restartCount: number): ContainerBaseInfo {
        this['restart_count'] = restartCount;
        return this;
    }
    public set restartCount(restartCount: number  | undefined) {
        this['restart_count'] = restartCount;
    }
    public get restartCount(): number | undefined {
        return this['restart_count'];
    }
    public withPodName(podName: string): ContainerBaseInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withClusterName(clusterName: string): ContainerBaseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): ContainerBaseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): ContainerBaseInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withRisky(risky: boolean): ContainerBaseInfo {
        this['risky'] = risky;
        return this;
    }
    public withLowRisk(lowRisk: number): ContainerBaseInfo {
        this['low_risk'] = lowRisk;
        return this;
    }
    public set lowRisk(lowRisk: number  | undefined) {
        this['low_risk'] = lowRisk;
    }
    public get lowRisk(): number | undefined {
        return this['low_risk'];
    }
    public withMediumRisk(mediumRisk: number): ContainerBaseInfo {
        this['medium_risk'] = mediumRisk;
        return this;
    }
    public set mediumRisk(mediumRisk: number  | undefined) {
        this['medium_risk'] = mediumRisk;
    }
    public get mediumRisk(): number | undefined {
        return this['medium_risk'];
    }
    public withHighRisk(highRisk: number): ContainerBaseInfo {
        this['high_risk'] = highRisk;
        return this;
    }
    public set highRisk(highRisk: number  | undefined) {
        this['high_risk'] = highRisk;
    }
    public get highRisk(): number | undefined {
        return this['high_risk'];
    }
    public withFatalRisk(fatalRisk: number): ContainerBaseInfo {
        this['fatal_risk'] = fatalRisk;
        return this;
    }
    public set fatalRisk(fatalRisk: number  | undefined) {
        this['fatal_risk'] = fatalRisk;
    }
    public get fatalRisk(): number | undefined {
        return this['fatal_risk'];
    }
}