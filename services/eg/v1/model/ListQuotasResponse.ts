import { QuotaResourceResp } from './QuotaResourceResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotasResponse extends SdkResponse {
    public quotas?: QuotaResourceResp;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QuotaResourceResp): ListQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}