

export class ExportHostsDetailRequest {
    public name?: string;
    private 'availability_zone'?: string;
    private 'host_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'host_type'?: string;
    private 'host_type_name'?: string;
    public state?: ExportHostsDetailRequestStateEnum | string;
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'changes_since'?: string;
    private 'sort_field'?: ExportHostsDetailRequestSortFieldEnum | string;
    private 'sort_type'?: ExportHostsDetailRequestSortTypeEnum | string;
    public language?: ExportHostsDetailRequestLanguageEnum | string;
    public constructor(language?: string) { 
        this['language'] = language;
    }
    public withName(name: string): ExportHostsDetailRequest {
        this['name'] = name;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): ExportHostsDetailRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withHostId(hostId: string): ExportHostsDetailRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportHostsDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostType(hostType: string): ExportHostsDetailRequest {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withHostTypeName(hostTypeName: string): ExportHostsDetailRequest {
        this['host_type_name'] = hostTypeName;
        return this;
    }
    public set hostTypeName(hostTypeName: string  | undefined) {
        this['host_type_name'] = hostTypeName;
    }
    public get hostTypeName(): string | undefined {
        return this['host_type_name'];
    }
    public withState(state: ExportHostsDetailRequestStateEnum | string): ExportHostsDetailRequest {
        this['state'] = state;
        return this;
    }
    public withLimit(limit: number): ExportHostsDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ExportHostsDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ExportHostsDetailRequest {
        this['marker'] = marker;
        return this;
    }
    public withChangesSince(changesSince: string): ExportHostsDetailRequest {
        this['changes_since'] = changesSince;
        return this;
    }
    public set changesSince(changesSince: string  | undefined) {
        this['changes_since'] = changesSince;
    }
    public get changesSince(): string | undefined {
        return this['changes_since'];
    }
    public withSortField(sortField: ExportHostsDetailRequestSortFieldEnum | string): ExportHostsDetailRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ExportHostsDetailRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ExportHostsDetailRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: ExportHostsDetailRequestSortTypeEnum | string): ExportHostsDetailRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: ExportHostsDetailRequestSortTypeEnum | string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): ExportHostsDetailRequestSortTypeEnum | string | undefined {
        return this['sort_type'];
    }
    public withLanguage(language: ExportHostsDetailRequestLanguageEnum | string): ExportHostsDetailRequest {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportHostsDetailRequestStateEnum {
    AVAILABLE = 'available',
    FAULT = 'fault',
    RELEASED = 'released'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportHostsDetailRequestSortFieldEnum {
    INSTANCE_TOTAL = 'instance_total',
    AVAILABLE_VCPUS = 'available_vcpus',
    AVAILABLE_MEMORY = 'available_memory'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportHostsDetailRequestSortTypeEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportHostsDetailRequestLanguageEnum {
    ZH_CN = 'zh_CN',
    EN_US = 'en_US'
}
