
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchQuotaResponse extends SdkResponse {
    public quota?: number;
    private 'eip_quota'?: number;
    private 'status_v6'?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withQuota(quota: number): SearchQuotaResponse {
        this['quota'] = quota;
        return this;
    }
    public withEipQuota(eipQuota: number): SearchQuotaResponse {
        this['eip_quota'] = eipQuota;
        return this;
    }
    public set eipQuota(eipQuota: number  | undefined) {
        this['eip_quota'] = eipQuota;
    }
    public get eipQuota(): number | undefined {
        return this['eip_quota'];
    }
    public withStatusV6(statusV6: string): SearchQuotaResponse {
        this['status_v6'] = statusV6;
        return this;
    }
    public set statusV6(statusV6: string  | undefined) {
        this['status_v6'] = statusV6;
    }
    public get statusV6(): string | undefined {
        return this['status_v6'];
    }
    public withStatus(status: string): SearchQuotaResponse {
        this['status'] = status;
        return this;
    }
}