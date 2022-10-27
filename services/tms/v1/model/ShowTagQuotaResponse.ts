import { TagQuota } from './TagQuota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTagQuotaResponse extends SdkResponse {
    public quotas?: Array<TagQuota>;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<TagQuota>): ShowTagQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}