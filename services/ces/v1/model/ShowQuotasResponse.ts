import { QuotasResp } from './QuotasResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotasResponse extends SdkResponse {
    public quotas?: QuotasResp;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QuotasResp): ShowQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}