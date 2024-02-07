

export class ShowInternetBandwidthRequest {
    private 'internet_bandwidth_id'?: string;
    public fields?: Array<ShowInternetBandwidthRequestFieldsEnum> | Array<string>;
    public constructor(internetBandwidthId?: string) { 
        this['internet_bandwidth_id'] = internetBandwidthId;
    }
    public withInternetBandwidthId(internetBandwidthId: string): ShowInternetBandwidthRequest {
        this['internet_bandwidth_id'] = internetBandwidthId;
        return this;
    }
    public set internetBandwidthId(internetBandwidthId: string  | undefined) {
        this['internet_bandwidth_id'] = internetBandwidthId;
    }
    public get internetBandwidthId(): string | undefined {
        return this['internet_bandwidth_id'];
    }
    public withFields(fields: Array<ShowInternetBandwidthRequestFieldsEnum> | Array<string>): ShowInternetBandwidthRequest {
        this['fields'] = fields;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInternetBandwidthRequestFieldsEnum {
    ID = 'id',
    NAME = 'name',
    ISP = 'isp',
    INGRESS_SIZE = 'ingress_size',
    ACCESS_SITE = 'access_site',
    SIZE = 'size',
    DESCRIPTION = 'description',
    CHARGE_MODE = 'charge_mode',
    RATIO_95PEAK = 'ratio_95peak',
    FREEZEN_INFO = 'freezen_info',
    DOMAIN_ID = 'domain_id',
    STATUS = 'status',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
    IS_PRE_PAID = 'is_pre_paid',
    TYPE = 'type',
    TAGS = 'tags',
    SYS_TAGS = 'sys_tags',
    ENTERPRISE_PROJECT_ID = 'enterprise_project_id'
}
