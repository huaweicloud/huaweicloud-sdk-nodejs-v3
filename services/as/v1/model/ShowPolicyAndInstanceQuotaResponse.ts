import { PolicyInstanceQuotas } from './PolicyInstanceQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPolicyAndInstanceQuotaResponse extends SdkResponse {
    public quotas?: PolicyInstanceQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: PolicyInstanceQuotas): ShowPolicyAndInstanceQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}