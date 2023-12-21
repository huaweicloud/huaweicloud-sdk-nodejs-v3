
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaResponse extends SdkResponse {
    public quota?: number;
    private 'quota_used'?: number;
    public constructor() { 
        super();
    }
    public withQuota(quota: number): ShowQuotaResponse {
        this['quota'] = quota;
        return this;
    }
    public withQuotaUsed(quotaUsed: number): ShowQuotaResponse {
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