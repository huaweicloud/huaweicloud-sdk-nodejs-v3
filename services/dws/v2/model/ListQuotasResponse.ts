import { QuotasQuotas } from './QuotasQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotasResponse extends SdkResponse {
    public quotas?: QuotasQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QuotasQuotas): ListQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}