

export class ListHostsDetailRequest {
    public name?: string;
    private 'availability_zone'?: string;
    private 'host_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'host_type'?: string;
    private 'host_type_name'?: string;
    public state?: ListHostsDetailRequestStateEnum | string;
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'changes_since'?: string;
    private 'sort_field'?: ListHostsDetailRequestSortFieldEnum | string;
    private 'sort_type'?: ListHostsDetailRequestSortTypeEnum | string;
    public constructor() { 
    }
    public withName(name: string): ListHostsDetailRequest {
        this['name'] = name;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): ListHostsDetailRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withHostId(hostId: string): ListHostsDetailRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListHostsDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostType(hostType: string): ListHostsDetailRequest {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withHostTypeName(hostTypeName: string): ListHostsDetailRequest {
        this['host_type_name'] = hostTypeName;
        return this;
    }
    public set hostTypeName(hostTypeName: string  | undefined) {
        this['host_type_name'] = hostTypeName;
    }
    public get hostTypeName(): string | undefined {
        return this['host_type_name'];
    }
    public withState(state: ListHostsDetailRequestStateEnum | string): ListHostsDetailRequest {
        this['state'] = state;
        return this;
    }
    public withLimit(limit: number): ListHostsDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListHostsDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListHostsDetailRequest {
        this['marker'] = marker;
        return this;
    }
    public withChangesSince(changesSince: string): ListHostsDetailRequest {
        this['changes_since'] = changesSince;
        return this;
    }
    public set changesSince(changesSince: string  | undefined) {
        this['changes_since'] = changesSince;
    }
    public get changesSince(): string | undefined {
        return this['changes_since'];
    }
    public withSortField(sortField: ListHostsDetailRequestSortFieldEnum | string): ListHostsDetailRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ListHostsDetailRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ListHostsDetailRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: ListHostsDetailRequestSortTypeEnum | string): ListHostsDetailRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: ListHostsDetailRequestSortTypeEnum | string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): ListHostsDetailRequestSortTypeEnum | string | undefined {
        return this['sort_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHostsDetailRequestStateEnum {
    AVAILABLE = 'available',
    FAULT = 'fault',
    RELEASED = 'released'
}
/**
    * @export
    * @enum {string}
    */
export enum ListHostsDetailRequestSortFieldEnum {
    INSTANCE_TOTAL = 'instance_total',
    AVAILABLE_VCPUS = 'available_vcpus',
    AVAILABLE_MEMORY = 'available_memory'
}
/**
    * @export
    * @enum {string}
    */
export enum ListHostsDetailRequestSortTypeEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
