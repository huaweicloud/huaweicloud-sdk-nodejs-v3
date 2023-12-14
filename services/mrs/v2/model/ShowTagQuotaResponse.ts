
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTagQuotaResponse extends SdkResponse {
    private 'total_quota'?: number;
    private 'available_quota'?: number;
    public constructor() { 
        super();
    }
    public withTotalQuota(totalQuota: number): ShowTagQuotaResponse {
        this['total_quota'] = totalQuota;
        return this;
    }
    public set totalQuota(totalQuota: number  | undefined) {
        this['total_quota'] = totalQuota;
    }
    public get totalQuota(): number | undefined {
        return this['total_quota'];
    }
    public withAvailableQuota(availableQuota: number): ShowTagQuotaResponse {
        this['available_quota'] = availableQuota;
        return this;
    }
    public set availableQuota(availableQuota: number  | undefined) {
        this['available_quota'] = availableQuota;
    }
    public get availableQuota(): number | undefined {
        return this['available_quota'];
    }
}