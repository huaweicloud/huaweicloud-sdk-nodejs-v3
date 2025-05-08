import { QuotasRespQuotas } from './QuotasRespQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotasResponse extends SdkResponse {
    public quotas?: QuotasRespQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QuotasRespQuotas): ShowQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}