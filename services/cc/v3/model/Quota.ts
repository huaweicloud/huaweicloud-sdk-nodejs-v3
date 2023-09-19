

export class Quota {
    private 'domain_id'?: string;
    private 'quota_type'?: QuotaQuotaTypeEnum | string;
    private 'quota_number'?: number;
    private 'quota_used'?: number;
    private 'cloud_connection_id'?: string;
    private 'region_id'?: string;
    public constructor() { 
    }
    public withDomainId(domainId: string): Quota {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withQuotaType(quotaType: QuotaQuotaTypeEnum | string): Quota {
        this['quota_type'] = quotaType;
        return this;
    }
    public set quotaType(quotaType: QuotaQuotaTypeEnum | string  | undefined) {
        this['quota_type'] = quotaType;
    }
    public get quotaType(): QuotaQuotaTypeEnum | string | undefined {
        return this['quota_type'];
    }
    public withQuotaNumber(quotaNumber: number): Quota {
        this['quota_number'] = quotaNumber;
        return this;
    }
    public set quotaNumber(quotaNumber: number  | undefined) {
        this['quota_number'] = quotaNumber;
    }
    public get quotaNumber(): number | undefined {
        return this['quota_number'];
    }
    public withQuotaUsed(quotaUsed: number): Quota {
        this['quota_used'] = quotaUsed;
        return this;
    }
    public set quotaUsed(quotaUsed: number  | undefined) {
        this['quota_used'] = quotaUsed;
    }
    public get quotaUsed(): number | undefined {
        return this['quota_used'];
    }
    public withCloudConnectionId(cloudConnectionId: string): Quota {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: string  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): string | undefined {
        return this['cloud_connection_id'];
    }
    public withRegionId(regionId: string): Quota {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QuotaQuotaTypeEnum {
    CLOUD_CONNECTION = 'cloud_connection',
    CLOUD_CONNECTION_REGION = 'cloud_connection_region',
    CLOUD_CONNECTION_ROUTE = 'cloud_connection_route',
    REGION_NETWORK_INSTANCE = 'region_network_instance'
}
