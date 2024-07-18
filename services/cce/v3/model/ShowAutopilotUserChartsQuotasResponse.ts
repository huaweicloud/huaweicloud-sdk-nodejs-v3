import { QuotaRespQuotas } from './QuotaRespQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutopilotUserChartsQuotasResponse extends SdkResponse {
    public quotas?: QuotaRespQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QuotaRespQuotas): ShowAutopilotUserChartsQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}