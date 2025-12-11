import { HostProperties } from './HostProperties';


export class DedicatedCluster {
    private 'project_id'?: string;
    private 'availability_zone'?: string;
    private 'host_total'?: number;
    private 'host_type'?: string;
    private 'service_type'?: string;
    private 'host_properties'?: HostProperties;
    private 'vcpus_used'?: number;
    private 'vcpus_total'?: number;
    private 'memory_mb_used'?: number;
    private 'memory_mb_total'?: number;
    public flavors?: Array<string>;
    private 'instance_total'?: number;
    public constructor() { 
    }
    public withProjectId(projectId: string): DedicatedCluster {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAvailabilityZone(availabilityZone: string): DedicatedCluster {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withHostTotal(hostTotal: number): DedicatedCluster {
        this['host_total'] = hostTotal;
        return this;
    }
    public set hostTotal(hostTotal: number  | undefined) {
        this['host_total'] = hostTotal;
    }
    public get hostTotal(): number | undefined {
        return this['host_total'];
    }
    public withHostType(hostType: string): DedicatedCluster {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withServiceType(serviceType: string): DedicatedCluster {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withHostProperties(hostProperties: HostProperties): DedicatedCluster {
        this['host_properties'] = hostProperties;
        return this;
    }
    public set hostProperties(hostProperties: HostProperties  | undefined) {
        this['host_properties'] = hostProperties;
    }
    public get hostProperties(): HostProperties | undefined {
        return this['host_properties'];
    }
    public withVcpusUsed(vcpusUsed: number): DedicatedCluster {
        this['vcpus_used'] = vcpusUsed;
        return this;
    }
    public set vcpusUsed(vcpusUsed: number  | undefined) {
        this['vcpus_used'] = vcpusUsed;
    }
    public get vcpusUsed(): number | undefined {
        return this['vcpus_used'];
    }
    public withVcpusTotal(vcpusTotal: number): DedicatedCluster {
        this['vcpus_total'] = vcpusTotal;
        return this;
    }
    public set vcpusTotal(vcpusTotal: number  | undefined) {
        this['vcpus_total'] = vcpusTotal;
    }
    public get vcpusTotal(): number | undefined {
        return this['vcpus_total'];
    }
    public withMemoryMbUsed(memoryMbUsed: number): DedicatedCluster {
        this['memory_mb_used'] = memoryMbUsed;
        return this;
    }
    public set memoryMbUsed(memoryMbUsed: number  | undefined) {
        this['memory_mb_used'] = memoryMbUsed;
    }
    public get memoryMbUsed(): number | undefined {
        return this['memory_mb_used'];
    }
    public withMemoryMbTotal(memoryMbTotal: number): DedicatedCluster {
        this['memory_mb_total'] = memoryMbTotal;
        return this;
    }
    public set memoryMbTotal(memoryMbTotal: number  | undefined) {
        this['memory_mb_total'] = memoryMbTotal;
    }
    public get memoryMbTotal(): number | undefined {
        return this['memory_mb_total'];
    }
    public withFlavors(flavors: Array<string>): DedicatedCluster {
        this['flavors'] = flavors;
        return this;
    }
    public withInstanceTotal(instanceTotal: number): DedicatedCluster {
        this['instance_total'] = instanceTotal;
        return this;
    }
    public set instanceTotal(instanceTotal: number  | undefined) {
        this['instance_total'] = instanceTotal;
    }
    public get instanceTotal(): number | undefined {
        return this['instance_total'];
    }
}