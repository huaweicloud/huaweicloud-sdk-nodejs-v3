

export class ShowGlobalEipSegmentRequest {
    private 'global_eip_segment_id'?: string;
    public fields?: Array<ShowGlobalEipSegmentRequestFieldsEnum> | Array<string>;
    public constructor(globalEipSegmentId?: string) { 
        this['global_eip_segment_id'] = globalEipSegmentId;
    }
    public withGlobalEipSegmentId(globalEipSegmentId: string): ShowGlobalEipSegmentRequest {
        this['global_eip_segment_id'] = globalEipSegmentId;
        return this;
    }
    public set globalEipSegmentId(globalEipSegmentId: string  | undefined) {
        this['global_eip_segment_id'] = globalEipSegmentId;
    }
    public get globalEipSegmentId(): string | undefined {
        return this['global_eip_segment_id'];
    }
    public withFields(fields: Array<ShowGlobalEipSegmentRequestFieldsEnum> | Array<string>): ShowGlobalEipSegmentRequest {
        this['fields'] = fields;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowGlobalEipSegmentRequestFieldsEnum {
    ID = 'id',
    NAME = 'name',
    DESCRIPTION = 'description',
    DOMAIN_ID = 'domain_id',
    ACCESS_SITE = 'access_site',
    GEIP_POOL_NAME = 'geip_pool_name',
    ISP = 'isp',
    IP_VERSION = 'ip_version',
    CIDR = 'cidr',
    CIDR_V6 = 'cidr_v6',
    FREEZEN = 'freezen',
    FREEZEN_INFO = 'freezen_info',
    STATUS = 'status',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
    INTERNET_BANDWIDTH = 'internet_bandwidth',
    ASSOCIATE_INSTANCE = 'associate_instance',
    IS_PRE_PAID = 'is_pre_paid',
    TAGS = 'tags',
    SYS_TAGS = 'sys_tags',
    ENTERPRISE_PROJECT_ID = 'enterprise_project_id'
}
