import { ShowQuotasResponseBodyQuotas } from './ShowQuotasResponseBodyQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotasResponse extends SdkResponse {
    public quotas?: ShowQuotasResponseBodyQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: ShowQuotasResponseBodyQuotas): ShowQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}