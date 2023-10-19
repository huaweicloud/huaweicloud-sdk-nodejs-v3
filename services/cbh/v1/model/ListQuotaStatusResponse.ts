
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotaStatusResponse extends SdkResponse {
    private 'status_v6'?: string;
    public status?: string;
    private 'eip_quota'?: number;
    public quota?: number;
    public constructor() { 
        super();
    }
    public withStatusV6(statusV6: string): ListQuotaStatusResponse {
        this['status_v6'] = statusV6;
        return this;
    }
    public set statusV6(statusV6: string  | undefined) {
        this['status_v6'] = statusV6;
    }
    public get statusV6(): string | undefined {
        return this['status_v6'];
    }
    public withStatus(status: string): ListQuotaStatusResponse {
        this['status'] = status;
        return this;
    }
    public withEipQuota(eipQuota: number): ListQuotaStatusResponse {
        this['eip_quota'] = eipQuota;
        return this;
    }
    public set eipQuota(eipQuota: number  | undefined) {
        this['eip_quota'] = eipQuota;
    }
    public get eipQuota(): number | undefined {
        return this['eip_quota'];
    }
    public withQuota(quota: number): ListQuotaStatusResponse {
        this['quota'] = quota;
        return this;
    }
}