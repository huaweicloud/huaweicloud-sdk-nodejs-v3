import { CommonQuotas } from './CommonQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaResponse extends SdkResponse {
    public quotas?: CommonQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: CommonQuotas): ShowQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}