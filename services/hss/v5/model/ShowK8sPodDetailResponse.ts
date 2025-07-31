import { ContainerBaseInfo } from './ContainerBaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowK8sPodDetailResponse extends SdkResponse {
    private 'pod_name'?: string;
    private 'namespace_name'?: string;
    private 'cluster_name'?: string;
    private 'node_name'?: string;
    public label?: string;
    public cpu?: string;
    public memory?: string;
    private 'cpu_limit'?: string;
    private 'memory_limit'?: string;
    private 'node_ip'?: string;
    private 'pod_ip'?: string;
    public status?: string;
    private 'create_time'?: number;
    public containers?: Array<ContainerBaseInfo>;
    public constructor() { 
        super();
    }
    public withPodName(podName: string): ShowK8sPodDetailResponse {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withNamespaceName(namespaceName: string): ShowK8sPodDetailResponse {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withClusterName(clusterName: string): ShowK8sPodDetailResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withNodeName(nodeName: string): ShowK8sPodDetailResponse {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withLabel(label: string): ShowK8sPodDetailResponse {
        this['label'] = label;
        return this;
    }
    public withCpu(cpu: string): ShowK8sPodDetailResponse {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: string): ShowK8sPodDetailResponse {
        this['memory'] = memory;
        return this;
    }
    public withCpuLimit(cpuLimit: string): ShowK8sPodDetailResponse {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: string  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): string | undefined {
        return this['cpu_limit'];
    }
    public withMemoryLimit(memoryLimit: string): ShowK8sPodDetailResponse {
        this['memory_limit'] = memoryLimit;
        return this;
    }
    public set memoryLimit(memoryLimit: string  | undefined) {
        this['memory_limit'] = memoryLimit;
    }
    public get memoryLimit(): string | undefined {
        return this['memory_limit'];
    }
    public withNodeIp(nodeIp: string): ShowK8sPodDetailResponse {
        this['node_ip'] = nodeIp;
        return this;
    }
    public set nodeIp(nodeIp: string  | undefined) {
        this['node_ip'] = nodeIp;
    }
    public get nodeIp(): string | undefined {
        return this['node_ip'];
    }
    public withPodIp(podIp: string): ShowK8sPodDetailResponse {
        this['pod_ip'] = podIp;
        return this;
    }
    public set podIp(podIp: string  | undefined) {
        this['pod_ip'] = podIp;
    }
    public get podIp(): string | undefined {
        return this['pod_ip'];
    }
    public withStatus(status: string): ShowK8sPodDetailResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: number): ShowK8sPodDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withContainers(containers: Array<ContainerBaseInfo>): ShowK8sPodDetailResponse {
        this['containers'] = containers;
        return this;
    }
}