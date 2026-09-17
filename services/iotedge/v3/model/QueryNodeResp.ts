import { NodeAllocatedResourceDTO } from './NodeAllocatedResourceDTO';
import { NodeResourceDTO } from './NodeResourceDTO';


export class QueryNodeResp {
    public name?: string;
    private 'internal_ip'?: string;
    public hostname?: string;
    public allocatable?: NodeResourceDTO;
    public capacity?: NodeResourceDTO;
    private 'allocated_resources'?: NodeAllocatedResourceDTO;
    public status?: string;
    public architecture?: string;
    public labels?: { [key: string]: string; };
    private 'node_type'?: string;
    private 'kernel_version'?: string;
    private 'os_image'?: string;
    private 'container_runtime_version'?: string;
    private 'kubernetes_version'?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withName(name: string): QueryNodeResp {
        this['name'] = name;
        return this;
    }
    public withInternalIp(internalIp: string): QueryNodeResp {
        this['internal_ip'] = internalIp;
        return this;
    }
    public set internalIp(internalIp: string  | undefined) {
        this['internal_ip'] = internalIp;
    }
    public get internalIp(): string | undefined {
        return this['internal_ip'];
    }
    public withHostname(hostname: string): QueryNodeResp {
        this['hostname'] = hostname;
        return this;
    }
    public withAllocatable(allocatable: NodeResourceDTO): QueryNodeResp {
        this['allocatable'] = allocatable;
        return this;
    }
    public withCapacity(capacity: NodeResourceDTO): QueryNodeResp {
        this['capacity'] = capacity;
        return this;
    }
    public withAllocatedResources(allocatedResources: NodeAllocatedResourceDTO): QueryNodeResp {
        this['allocated_resources'] = allocatedResources;
        return this;
    }
    public set allocatedResources(allocatedResources: NodeAllocatedResourceDTO  | undefined) {
        this['allocated_resources'] = allocatedResources;
    }
    public get allocatedResources(): NodeAllocatedResourceDTO | undefined {
        return this['allocated_resources'];
    }
    public withStatus(status: string): QueryNodeResp {
        this['status'] = status;
        return this;
    }
    public withArchitecture(architecture: string): QueryNodeResp {
        this['architecture'] = architecture;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): QueryNodeResp {
        this['labels'] = labels;
        return this;
    }
    public withNodeType(nodeType: string): QueryNodeResp {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withKernelVersion(kernelVersion: string): QueryNodeResp {
        this['kernel_version'] = kernelVersion;
        return this;
    }
    public set kernelVersion(kernelVersion: string  | undefined) {
        this['kernel_version'] = kernelVersion;
    }
    public get kernelVersion(): string | undefined {
        return this['kernel_version'];
    }
    public withOsImage(osImage: string): QueryNodeResp {
        this['os_image'] = osImage;
        return this;
    }
    public set osImage(osImage: string  | undefined) {
        this['os_image'] = osImage;
    }
    public get osImage(): string | undefined {
        return this['os_image'];
    }
    public withContainerRuntimeVersion(containerRuntimeVersion: string): QueryNodeResp {
        this['container_runtime_version'] = containerRuntimeVersion;
        return this;
    }
    public set containerRuntimeVersion(containerRuntimeVersion: string  | undefined) {
        this['container_runtime_version'] = containerRuntimeVersion;
    }
    public get containerRuntimeVersion(): string | undefined {
        return this['container_runtime_version'];
    }
    public withKubernetesVersion(kubernetesVersion: string): QueryNodeResp {
        this['kubernetes_version'] = kubernetesVersion;
        return this;
    }
    public set kubernetesVersion(kubernetesVersion: string  | undefined) {
        this['kubernetes_version'] = kubernetesVersion;
    }
    public get kubernetesVersion(): string | undefined {
        return this['kubernetes_version'];
    }
    public withCreateTime(createTime: string): QueryNodeResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}