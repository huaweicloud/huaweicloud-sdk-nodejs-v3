import { AllQuotas } from './AllQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceQuotaResponse extends SdkResponse {
    public quotas?: AllQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: AllQuotas): ShowResourceQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}