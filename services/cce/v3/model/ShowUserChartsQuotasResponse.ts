import { QuotaRespQuotas } from './QuotaRespQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserChartsQuotasResponse extends SdkResponse {
    public quotas?: QuotaRespQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QuotaRespQuotas): ShowUserChartsQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}