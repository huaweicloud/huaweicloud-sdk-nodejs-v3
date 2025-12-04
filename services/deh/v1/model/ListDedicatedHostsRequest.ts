

export class ListDedicatedHostsRequest {
    private 'dedicated_host_id'?: string;
    public name?: string;
    private 'host_type'?: string;
    private 'host_type_name'?: string;
    public flavor?: string;
    public state?: ListDedicatedHostsRequestStateEnum | string;
    public tenant?: string;
    private 'availability_zone'?: string;
    public limit?: number;
    public marker?: string;
    public tags?: string;
    private 'instance_uuid'?: string;
    private 'released_at'?: string;
    private 'changes-since'?: string;
    public constructor() { 
    }
    public withDedicatedHostId(dedicatedHostId: string): ListDedicatedHostsRequest {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
    public withName(name: string): ListDedicatedHostsRequest {
        this['name'] = name;
        return this;
    }
    public withHostType(hostType: string): ListDedicatedHostsRequest {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withHostTypeName(hostTypeName: string): ListDedicatedHostsRequest {
        this['host_type_name'] = hostTypeName;
        return this;
    }
    public set hostTypeName(hostTypeName: string  | undefined) {
        this['host_type_name'] = hostTypeName;
    }
    public get hostTypeName(): string | undefined {
        return this['host_type_name'];
    }
    public withFlavor(flavor: string): ListDedicatedHostsRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withState(state: ListDedicatedHostsRequestStateEnum | string): ListDedicatedHostsRequest {
        this['state'] = state;
        return this;
    }
    public withTenant(tenant: string): ListDedicatedHostsRequest {
        this['tenant'] = tenant;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): ListDedicatedHostsRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withLimit(limit: number): ListDedicatedHostsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDedicatedHostsRequest {
        this['marker'] = marker;
        return this;
    }
    public withTags(tags: string): ListDedicatedHostsRequest {
        this['tags'] = tags;
        return this;
    }
    public withInstanceUuid(instanceUuid: string): ListDedicatedHostsRequest {
        this['instance_uuid'] = instanceUuid;
        return this;
    }
    public set instanceUuid(instanceUuid: string  | undefined) {
        this['instance_uuid'] = instanceUuid;
    }
    public get instanceUuid(): string | undefined {
        return this['instance_uuid'];
    }
    public withReleasedAt(releasedAt: string): ListDedicatedHostsRequest {
        this['released_at'] = releasedAt;
        return this;
    }
    public set releasedAt(releasedAt: string  | undefined) {
        this['released_at'] = releasedAt;
    }
    public get releasedAt(): string | undefined {
        return this['released_at'];
    }
    public withChangesSince(changesSince: string): ListDedicatedHostsRequest {
        this['changes-since'] = changesSince;
        return this;
    }
    public set changesSince(changesSince: string  | undefined) {
        this['changes-since'] = changesSince;
    }
    public get changesSince(): string | undefined {
        return this['changes-since'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDedicatedHostsRequestStateEnum {
    AVAILABLE = 'available',
    FAULT = 'fault',
    RELEASED = 'released'
}
