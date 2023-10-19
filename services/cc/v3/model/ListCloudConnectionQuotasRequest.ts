

export class ListCloudConnectionQuotasRequest {
    public limit?: number;
    public marker?: string;
    private 'quota_type'?: ListCloudConnectionQuotasRequestQuotaTypeEnum | string;
    private 'cloud_connection_id'?: string;
    private 'region_id'?: string;
    public constructor(quotaType?: string) { 
        this['quota_type'] = quotaType;
    }
    public withLimit(limit: number): ListCloudConnectionQuotasRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCloudConnectionQuotasRequest {
        this['marker'] = marker;
        return this;
    }
    public withQuotaType(quotaType: ListCloudConnectionQuotasRequestQuotaTypeEnum | string): ListCloudConnectionQuotasRequest {
        this['quota_type'] = quotaType;
        return this;
    }
    public set quotaType(quotaType: ListCloudConnectionQuotasRequestQuotaTypeEnum | string  | undefined) {
        this['quota_type'] = quotaType;
    }
    public get quotaType(): ListCloudConnectionQuotasRequestQuotaTypeEnum | string | undefined {
        return this['quota_type'];
    }
    public withCloudConnectionId(cloudConnectionId: string): ListCloudConnectionQuotasRequest {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: string  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): string | undefined {
        return this['cloud_connection_id'];
    }
    public withRegionId(regionId: string): ListCloudConnectionQuotasRequest {
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
export enum ListCloudConnectionQuotasRequestQuotaTypeEnum {
    CLOUD_CONNECTION = 'cloud_connection',
    CLOUD_CONNECTION_REGION = 'cloud_connection_region',
    CLOUD_CONNECTION_ROUTE = 'cloud_connection_route',
    REGION_NETWORK_INSTANCE = 'region_network_instance'
}
