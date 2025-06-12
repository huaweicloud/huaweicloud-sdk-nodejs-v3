

export class ListRecycleBinServersRequest {
    private 'all_tenants'?: string;
    private 'availability_zone'?: string;
    private 'expect-fields'?: ListRecycleBinServersRequestExpectFieldsEnum | string;
    private 'ip_address'?: string;
    public limit?: number;
    public marker?: string;
    public name?: string;
    public offset?: string;
    public tags?: Array<string>;
    private 'tags_key'?: Array<string>;
    public constructor() { 
    }
    public withAllTenants(allTenants: string): ListRecycleBinServersRequest {
        this['all_tenants'] = allTenants;
        return this;
    }
    public set allTenants(allTenants: string  | undefined) {
        this['all_tenants'] = allTenants;
    }
    public get allTenants(): string | undefined {
        return this['all_tenants'];
    }
    public withAvailabilityZone(availabilityZone: string): ListRecycleBinServersRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withExpectFields(expectFields: ListRecycleBinServersRequestExpectFieldsEnum | string): ListRecycleBinServersRequest {
        this['expect-fields'] = expectFields;
        return this;
    }
    public set expectFields(expectFields: ListRecycleBinServersRequestExpectFieldsEnum | string  | undefined) {
        this['expect-fields'] = expectFields;
    }
    public get expectFields(): ListRecycleBinServersRequestExpectFieldsEnum | string | undefined {
        return this['expect-fields'];
    }
    public withIpAddress(ipAddress: string): ListRecycleBinServersRequest {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withLimit(limit: number): ListRecycleBinServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRecycleBinServersRequest {
        this['marker'] = marker;
        return this;
    }
    public withName(name: string): ListRecycleBinServersRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: string): ListRecycleBinServersRequest {
        this['offset'] = offset;
        return this;
    }
    public withTags(tags: Array<string>): ListRecycleBinServersRequest {
        this['tags'] = tags;
        return this;
    }
    public withTagsKey(tagsKey: Array<string>): ListRecycleBinServersRequest {
        this['tags_key'] = tagsKey;
        return this;
    }
    public set tagsKey(tagsKey: Array<string>  | undefined) {
        this['tags_key'] = tagsKey;
    }
    public get tagsKey(): Array<string> | undefined {
        return this['tags_key'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRecycleBinServersRequestExpectFieldsEnum {
    AVAILABLE_VALUES__POWER_STATE = 'Available values : power_state',
    HOST_STATUS = 'host_status',
    HOSTNAME = 'hostname',
    HYPERVISOR_HOSTNAME = 'hypervisor_hostname',
    USER_DATA = 'user_data',
    KEY_NAME = 'key_name',
    ROOT_DEVICE_NAME = 'root_device_name',
    VOLUMES_ATTACHED = 'volumes_attached',
    SECURITY_GROUPS = 'security_groups',
    ADDRESSES = 'addresses',
    IMAGE = 'image',
    METADATA = 'metadata',
    TAGS = 'tags',
    SYSTEM_TAGS = 'system_tags',
    DEDICATED_HOST_ID = 'dedicated_host_id',
    ENTERPRISE_PROJECT_ID = 'enterprise_project_id',
    CPU_OPTIONS = 'cpu_options'
}
