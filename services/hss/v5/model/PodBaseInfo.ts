

export class PodBaseInfo {
    private 'pod_name'?: string;
    private 'namespace_name'?: string;
    private 'cluster_name'?: string;
    private 'node_name'?: string;
    public cpu?: string;
    public memory?: string;
    private 'cpu_limit'?: string;
    private 'memory_limit'?: string;
    private 'node_ip'?: string;
    private 'pod_ip'?: string;
    public status?: string;
    private 'create_time'?: number;
    private 'region_id'?: string;
    public id?: string;
    private 'cluster_id'?: string;
    private 'cluster_type'?: string;
    public constructor() { 
    }
    public withPodName(podName: string): PodBaseInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withNamespaceName(namespaceName: string): PodBaseInfo {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withClusterName(clusterName: string): PodBaseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withNodeName(nodeName: string): PodBaseInfo {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withCpu(cpu: string): PodBaseInfo {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: string): PodBaseInfo {
        this['memory'] = memory;
        return this;
    }
    public withCpuLimit(cpuLimit: string): PodBaseInfo {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: string  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): string | undefined {
        return this['cpu_limit'];
    }
    public withMemoryLimit(memoryLimit: string): PodBaseInfo {
        this['memory_limit'] = memoryLimit;
        return this;
    }
    public set memoryLimit(memoryLimit: string  | undefined) {
        this['memory_limit'] = memoryLimit;
    }
    public get memoryLimit(): string | undefined {
        return this['memory_limit'];
    }
    public withNodeIp(nodeIp: string): PodBaseInfo {
        this['node_ip'] = nodeIp;
        return this;
    }
    public set nodeIp(nodeIp: string  | undefined) {
        this['node_ip'] = nodeIp;
    }
    public get nodeIp(): string | undefined {
        return this['node_ip'];
    }
    public withPodIp(podIp: string): PodBaseInfo {
        this['pod_ip'] = podIp;
        return this;
    }
    public set podIp(podIp: string  | undefined) {
        this['pod_ip'] = podIp;
    }
    public get podIp(): string | undefined {
        return this['pod_ip'];
    }
    public withStatus(status: string): PodBaseInfo {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: number): PodBaseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withRegionId(regionId: string): PodBaseInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withId(id: string): PodBaseInfo {
        this['id'] = id;
        return this;
    }
    public withClusterId(clusterId: string): PodBaseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): PodBaseInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
}