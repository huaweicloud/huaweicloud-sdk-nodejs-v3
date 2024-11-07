import { SiteNetworkQuotaKeyEnum } from './SiteNetworkQuotaKeyEnum';


export class ListSiteNetworkQuotasRequest {
    private 'quota_type'?: Array<SiteNetworkQuotaKeyEnum>;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withQuotaType(quotaType: Array<SiteNetworkQuotaKeyEnum>): ListSiteNetworkQuotasRequest {
        this['quota_type'] = quotaType;
        return this;
    }
    public set quotaType(quotaType: Array<SiteNetworkQuotaKeyEnum>  | undefined) {
        this['quota_type'] = quotaType;
    }
    public get quotaType(): Array<SiteNetworkQuotaKeyEnum> | undefined {
        return this['quota_type'];
    }
    public withLimit(limit: number): ListSiteNetworkQuotasRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSiteNetworkQuotasRequest {
        this['marker'] = marker;
        return this;
    }
}