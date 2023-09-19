

export class ListQuotasRequest {
    public limit?: number;
    public marker?: string;
    private 'quota_type'?: ListQuotasRequestQuotaTypeEnum | string;
    public constructor(quotaType?: string) { 
        this['quota_type'] = quotaType;
    }
    public withLimit(limit: number): ListQuotasRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListQuotasRequest {
        this['marker'] = marker;
        return this;
    }
    public withQuotaType(quotaType: ListQuotasRequestQuotaTypeEnum | string): ListQuotasRequest {
        this['quota_type'] = quotaType;
        return this;
    }
    public set quotaType(quotaType: ListQuotasRequestQuotaTypeEnum | string  | undefined) {
        this['quota_type'] = quotaType;
    }
    public get quotaType(): ListQuotasRequestQuotaTypeEnum | string | undefined {
        return this['quota_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListQuotasRequestQuotaTypeEnum {
    CLOUD_CONNECTION = 'cloud_connection',
    CLOUD_CONNECTION_REGION = 'cloud_connection_region',
    CLOUD_CONNECTION_ROUTE = 'cloud_connection_route',
    REGION_NETWORK_INSTANCE = 'region_network_instance'
}
