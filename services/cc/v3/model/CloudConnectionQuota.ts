import { CloudConnectionId } from './CloudConnectionId';
import { DomainId } from './DomainId';
import { RegionId } from './RegionId';


export class CloudConnectionQuota {
    private 'domain_id'?: string;
    private 'cloud_connection_id'?: string;
    private 'region_id'?: string;
    private 'quota_type'?: CloudConnectionQuotaQuotaTypeEnum | string;
    private 'quota_number'?: number;
    private 'quota_used'?: number;
    public constructor(domainId?: string, cloudConnectionId?: string, regionId?: string) { 
        this['domain_id'] = domainId;
        this['cloud_connection_id'] = cloudConnectionId;
        this['region_id'] = regionId;
    }
    public withDomainId(domainId: string): CloudConnectionQuota {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCloudConnectionId(cloudConnectionId: string): CloudConnectionQuota {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: string  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): string | undefined {
        return this['cloud_connection_id'];
    }
    public withRegionId(regionId: string): CloudConnectionQuota {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withQuotaType(quotaType: CloudConnectionQuotaQuotaTypeEnum | string): CloudConnectionQuota {
        this['quota_type'] = quotaType;
        return this;
    }
    public set quotaType(quotaType: CloudConnectionQuotaQuotaTypeEnum | string  | undefined) {
        this['quota_type'] = quotaType;
    }
    public get quotaType(): CloudConnectionQuotaQuotaTypeEnum | string | undefined {
        return this['quota_type'];
    }
    public withQuotaNumber(quotaNumber: number): CloudConnectionQuota {
        this['quota_number'] = quotaNumber;
        return this;
    }
    public set quotaNumber(quotaNumber: number  | undefined) {
        this['quota_number'] = quotaNumber;
    }
    public get quotaNumber(): number | undefined {
        return this['quota_number'];
    }
    public withQuotaUsed(quotaUsed: number): CloudConnectionQuota {
        this['quota_used'] = quotaUsed;
        return this;
    }
    public set quotaUsed(quotaUsed: number  | undefined) {
        this['quota_used'] = quotaUsed;
    }
    public get quotaUsed(): number | undefined {
        return this['quota_used'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CloudConnectionQuotaQuotaTypeEnum {
    CLOUD_CONNECTION = 'cloud_connection',
    CLOUD_CONNECTION_REGION = 'cloud_connection_region',
    CLOUD_CONNECTION_ROUTE = 'cloud_connection_route',
    REGION_NETWORK_INSTANCE = 'region_network_instance'
}
