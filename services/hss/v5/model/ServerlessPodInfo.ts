

export class ServerlessPodInfo {
    private 'pod_name'?: string;
    private 'namespace_name'?: string;
    private 'cluster_name'?: string;
    public cpu?: string;
    public memory?: string;
    private 'cpu_limit'?: string;
    private 'memory_limit'?: string;
    private 'pod_ip'?: string;
    private 'protect_status'?: string;
    private 'detect_result'?: string;
    public status?: string;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withPodName(podName: string): ServerlessPodInfo {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withNamespaceName(namespaceName: string): ServerlessPodInfo {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withClusterName(clusterName: string): ServerlessPodInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withCpu(cpu: string): ServerlessPodInfo {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: string): ServerlessPodInfo {
        this['memory'] = memory;
        return this;
    }
    public withCpuLimit(cpuLimit: string): ServerlessPodInfo {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: string  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): string | undefined {
        return this['cpu_limit'];
    }
    public withMemoryLimit(memoryLimit: string): ServerlessPodInfo {
        this['memory_limit'] = memoryLimit;
        return this;
    }
    public set memoryLimit(memoryLimit: string  | undefined) {
        this['memory_limit'] = memoryLimit;
    }
    public get memoryLimit(): string | undefined {
        return this['memory_limit'];
    }
    public withPodIp(podIp: string): ServerlessPodInfo {
        this['pod_ip'] = podIp;
        return this;
    }
    public set podIp(podIp: string  | undefined) {
        this['pod_ip'] = podIp;
    }
    public get podIp(): string | undefined {
        return this['pod_ip'];
    }
    public withProtectStatus(protectStatus: string): ServerlessPodInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withDetectResult(detectResult: string): ServerlessPodInfo {
        this['detect_result'] = detectResult;
        return this;
    }
    public set detectResult(detectResult: string  | undefined) {
        this['detect_result'] = detectResult;
    }
    public get detectResult(): string | undefined {
        return this['detect_result'];
    }
    public withStatus(status: string): ServerlessPodInfo {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: number): ServerlessPodInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}