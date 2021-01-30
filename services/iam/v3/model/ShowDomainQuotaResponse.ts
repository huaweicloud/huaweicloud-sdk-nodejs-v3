import { QuotaResult } from './QuotaResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainQuotaResponse extends SdkResponse {
    public quotas?: QuotaResult;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QuotaResult): ShowDomainQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}