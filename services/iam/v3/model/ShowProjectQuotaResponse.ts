import { QuotaResult } from './QuotaResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectQuotaResponse extends SdkResponse {
    public quotas?: QuotaResult;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QuotaResult): ShowProjectQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}