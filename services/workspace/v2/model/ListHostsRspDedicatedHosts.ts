import { ListHostsRspHostProperties } from './ListHostsRspHostProperties';


export class ListHostsRspDedicatedHosts {
    private 'dedicated_host_id'?: string;
    public name?: string;
    private 'auto_placement'?: string;
    private 'availability_zone'?: string;
    private 'host_properties'?: ListHostsRspHostProperties;
    private 'product_id'?: string;
    private 'order_id'?: string;
    private 'resource_type'?: string;
    public state?: string;
    private 'available_vcpus'?: number;
    private 'available_memory'?: number;
    private 'instance_total'?: number;
    private 'allocated_at'?: string;
    private 'released_at'?: string;
    private 'instance_uuids'?: Array<string>;
    private 'enterprise_project_id'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withDedicatedHostId(dedicatedHostId: string): ListHostsRspDedicatedHosts {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
    public withName(name: string): ListHostsRspDedicatedHosts {
        this['name'] = name;
        return this;
    }
    public withAutoPlacement(autoPlacement: string): ListHostsRspDedicatedHosts {
        this['auto_placement'] = autoPlacement;
        return this;
    }
    public set autoPlacement(autoPlacement: string  | undefined) {
        this['auto_placement'] = autoPlacement;
    }
    public get autoPlacement(): string | undefined {
        return this['auto_placement'];
    }
    public withAvailabilityZone(availabilityZone: string): ListHostsRspDedicatedHosts {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withHostProperties(hostProperties: ListHostsRspHostProperties): ListHostsRspDedicatedHosts {
        this['host_properties'] = hostProperties;
        return this;
    }
    public set hostProperties(hostProperties: ListHostsRspHostProperties  | undefined) {
        this['host_properties'] = hostProperties;
    }
    public get hostProperties(): ListHostsRspHostProperties | undefined {
        return this['host_properties'];
    }
    public withProductId(productId: string): ListHostsRspDedicatedHosts {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withOrderId(orderId: string): ListHostsRspDedicatedHosts {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withResourceType(resourceType: string): ListHostsRspDedicatedHosts {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withState(state: string): ListHostsRspDedicatedHosts {
        this['state'] = state;
        return this;
    }
    public withAvailableVcpus(availableVcpus: number): ListHostsRspDedicatedHosts {
        this['available_vcpus'] = availableVcpus;
        return this;
    }
    public set availableVcpus(availableVcpus: number  | undefined) {
        this['available_vcpus'] = availableVcpus;
    }
    public get availableVcpus(): number | undefined {
        return this['available_vcpus'];
    }
    public withAvailableMemory(availableMemory: number): ListHostsRspDedicatedHosts {
        this['available_memory'] = availableMemory;
        return this;
    }
    public set availableMemory(availableMemory: number  | undefined) {
        this['available_memory'] = availableMemory;
    }
    public get availableMemory(): number | undefined {
        return this['available_memory'];
    }
    public withInstanceTotal(instanceTotal: number): ListHostsRspDedicatedHosts {
        this['instance_total'] = instanceTotal;
        return this;
    }
    public set instanceTotal(instanceTotal: number  | undefined) {
        this['instance_total'] = instanceTotal;
    }
    public get instanceTotal(): number | undefined {
        return this['instance_total'];
    }
    public withAllocatedAt(allocatedAt: string): ListHostsRspDedicatedHosts {
        this['allocated_at'] = allocatedAt;
        return this;
    }
    public set allocatedAt(allocatedAt: string  | undefined) {
        this['allocated_at'] = allocatedAt;
    }
    public get allocatedAt(): string | undefined {
        return this['allocated_at'];
    }
    public withReleasedAt(releasedAt: string): ListHostsRspDedicatedHosts {
        this['released_at'] = releasedAt;
        return this;
    }
    public set releasedAt(releasedAt: string  | undefined) {
        this['released_at'] = releasedAt;
    }
    public get releasedAt(): string | undefined {
        return this['released_at'];
    }
    public withInstanceUuids(instanceUuids: Array<string>): ListHostsRspDedicatedHosts {
        this['instance_uuids'] = instanceUuids;
        return this;
    }
    public set instanceUuids(instanceUuids: Array<string>  | undefined) {
        this['instance_uuids'] = instanceUuids;
    }
    public get instanceUuids(): Array<string> | undefined {
        return this['instance_uuids'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListHostsRspDedicatedHosts {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProjectId(projectId: string): ListHostsRspDedicatedHosts {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}