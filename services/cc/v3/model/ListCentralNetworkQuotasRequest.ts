import { CentralNetworkQuotaKeyEnum } from './CentralNetworkQuotaKeyEnum';


export class ListCentralNetworkQuotasRequest {
    private 'quota_type'?: Array<CentralNetworkQuotaKeyEnum>;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withQuotaType(quotaType: Array<CentralNetworkQuotaKeyEnum>): ListCentralNetworkQuotasRequest {
        this['quota_type'] = quotaType;
        return this;
    }
    public set quotaType(quotaType: Array<CentralNetworkQuotaKeyEnum>  | undefined) {
        this['quota_type'] = quotaType;
    }
    public get quotaType(): Array<CentralNetworkQuotaKeyEnum> | undefined {
        return this['quota_type'];
    }
    public withLimit(limit: number): ListCentralNetworkQuotasRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCentralNetworkQuotasRequest {
        this['marker'] = marker;
        return this;
    }
}