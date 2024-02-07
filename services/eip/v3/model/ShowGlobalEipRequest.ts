

export class ShowGlobalEipRequest {
    private 'global_eip_id'?: string;
    public fields?: Array<ShowGlobalEipRequestFieldsEnum> | Array<string>;
    public constructor(globalEipId?: string) { 
        this['global_eip_id'] = globalEipId;
    }
    public withGlobalEipId(globalEipId: string): ShowGlobalEipRequest {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: string  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): string | undefined {
        return this['global_eip_id'];
    }
    public withFields(fields: Array<ShowGlobalEipRequestFieldsEnum> | Array<string>): ShowGlobalEipRequest {
        this['fields'] = fields;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowGlobalEipRequestFieldsEnum {
    ID = 'id',
    NAME = 'name',
    DESCRIPTION = 'description',
    DOMAIN_ID = 'domain_id',
    ACCESS_SITE = 'access_site',
    GEIP_POOL_NAME = 'geip_pool_name',
    ISP = 'isp',
    IP_VERSION = 'ip_version',
    IP_ADDRESS = 'ip_address',
    IPV6_ADDRESS = 'ipv6_address',
    FREEZEN = 'freezen',
    FREEZEN_INFO = 'freezen_info',
    POLLUTED = 'polluted',
    STATUS = 'status',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
    INTERNET_BANDWIDTH_INFO = 'internet_bandwidth_info',
    GLOBAL_CONNECTION_BANDWIDTH_INFO = 'global_connection_bandwidth_info',
    ASSOCIATE_INSTANCE_INFO = 'associate_instance_info',
    IS_PRE_PAID = 'is_pre_paid',
    TAGS = 'tags',
    SYS_TAGS = 'sys_tags',
    ENTERPRISE_PROJECT_ID = 'enterprise_project_id'
}
