import { QuotaResponseDdosQuota } from './QuotaResponseDdosQuota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotaResponse extends SdkResponse {
    private 'ddos_quota'?: QuotaResponseDdosQuota;
    public constructor() { 
        super();
    }
    public withDdosQuota(ddosQuota: QuotaResponseDdosQuota): ListQuotaResponse {
        this['ddos_quota'] = ddosQuota;
        return this;
    }
    public set ddosQuota(ddosQuota: QuotaResponseDdosQuota  | undefined) {
        this['ddos_quota'] = ddosQuota;
    }
    public get ddosQuota(): QuotaResponseDdosQuota | undefined {
        return this['ddos_quota'];
    }
}