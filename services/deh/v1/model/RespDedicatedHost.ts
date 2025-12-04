import { RespHostProperty } from './RespHostProperty';


export class RespDedicatedHost {
    private 'dedicated_host_id'?: string;
    public name?: string;
    private 'auto_placement'?: RespDedicatedHostAutoPlacementEnum | string;
    private 'availability_zone'?: string;
    private 'project_id'?: string;
    private 'host_properties'?: RespHostProperty;
    public state?: RespDedicatedHostStateEnum | string;
    private 'available_vcpus'?: number;
    private 'available_memory'?: number;
    private 'allocated_at'?: string;
    private 'released_at'?: string;
    private 'instance_total'?: number;
    private 'instance_uuids'?: Array<string>;
    public tags?: object;
    private 'sys_tags'?: object;
    public constructor(dedicatedHostId?: string, name?: string, autoPlacement?: string, availabilityZone?: string, projectId?: string, hostProperties?: RespHostProperty, state?: string, availableVcpus?: number, availableMemory?: number, allocatedAt?: string, releasedAt?: string, instanceTotal?: number, instanceUuids?: Array<string>, tags?: object, sysTags?: object) { 
        this['dedicated_host_id'] = dedicatedHostId;
        this['name'] = name;
        this['auto_placement'] = autoPlacement;
        this['availability_zone'] = availabilityZone;
        this['project_id'] = projectId;
        this['host_properties'] = hostProperties;
        this['state'] = state;
        this['available_vcpus'] = availableVcpus;
        this['available_memory'] = availableMemory;
        this['allocated_at'] = allocatedAt;
        this['released_at'] = releasedAt;
        this['instance_total'] = instanceTotal;
        this['instance_uuids'] = instanceUuids;
        this['tags'] = tags;
        this['sys_tags'] = sysTags;
    }
    public withDedicatedHostId(dedicatedHostId: string): RespDedicatedHost {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
    public withName(name: string): RespDedicatedHost {
        this['name'] = name;
        return this;
    }
    public withAutoPlacement(autoPlacement: RespDedicatedHostAutoPlacementEnum | string): RespDedicatedHost {
        this['auto_placement'] = autoPlacement;
        return this;
    }
    public set autoPlacement(autoPlacement: RespDedicatedHostAutoPlacementEnum | string  | undefined) {
        this['auto_placement'] = autoPlacement;
    }
    public get autoPlacement(): RespDedicatedHostAutoPlacementEnum | string | undefined {
        return this['auto_placement'];
    }
    public withAvailabilityZone(availabilityZone: string): RespDedicatedHost {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withProjectId(projectId: string): RespDedicatedHost {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withHostProperties(hostProperties: RespHostProperty): RespDedicatedHost {
        this['host_properties'] = hostProperties;
        return this;
    }
    public set hostProperties(hostProperties: RespHostProperty  | undefined) {
        this['host_properties'] = hostProperties;
    }
    public get hostProperties(): RespHostProperty | undefined {
        return this['host_properties'];
    }
    public withState(state: RespDedicatedHostStateEnum | string): RespDedicatedHost {
        this['state'] = state;
        return this;
    }
    public withAvailableVcpus(availableVcpus: number): RespDedicatedHost {
        this['available_vcpus'] = availableVcpus;
        return this;
    }
    public set availableVcpus(availableVcpus: number  | undefined) {
        this['available_vcpus'] = availableVcpus;
    }
    public get availableVcpus(): number | undefined {
        return this['available_vcpus'];
    }
    public withAvailableMemory(availableMemory: number): RespDedicatedHost {
        this['available_memory'] = availableMemory;
        return this;
    }
    public set availableMemory(availableMemory: number  | undefined) {
        this['available_memory'] = availableMemory;
    }
    public get availableMemory(): number | undefined {
        return this['available_memory'];
    }
    public withAllocatedAt(allocatedAt: string): RespDedicatedHost {
        this['allocated_at'] = allocatedAt;
        return this;
    }
    public set allocatedAt(allocatedAt: string  | undefined) {
        this['allocated_at'] = allocatedAt;
    }
    public get allocatedAt(): string | undefined {
        return this['allocated_at'];
    }
    public withReleasedAt(releasedAt: string): RespDedicatedHost {
        this['released_at'] = releasedAt;
        return this;
    }
    public set releasedAt(releasedAt: string  | undefined) {
        this['released_at'] = releasedAt;
    }
    public get releasedAt(): string | undefined {
        return this['released_at'];
    }
    public withInstanceTotal(instanceTotal: number): RespDedicatedHost {
        this['instance_total'] = instanceTotal;
        return this;
    }
    public set instanceTotal(instanceTotal: number  | undefined) {
        this['instance_total'] = instanceTotal;
    }
    public get instanceTotal(): number | undefined {
        return this['instance_total'];
    }
    public withInstanceUuids(instanceUuids: Array<string>): RespDedicatedHost {
        this['instance_uuids'] = instanceUuids;
        return this;
    }
    public set instanceUuids(instanceUuids: Array<string>  | undefined) {
        this['instance_uuids'] = instanceUuids;
    }
    public get instanceUuids(): Array<string> | undefined {
        return this['instance_uuids'];
    }
    public withTags(tags: object): RespDedicatedHost {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: object): RespDedicatedHost {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: object  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): object | undefined {
        return this['sys_tags'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RespDedicatedHostAutoPlacementEnum {
    ON = 'on',
    OFF = 'off'
}
/**
    * @export
    * @enum {string}
    */
export enum RespDedicatedHostStateEnum {
    AVAILABLE = 'available',
    RELEASED = 'released',
    FAULT = 'fault'
}
