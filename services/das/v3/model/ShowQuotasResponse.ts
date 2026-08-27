import { Quotas } from './Quotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotasResponse extends SdkResponse {
    public quotas?: Quotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Quotas): ShowQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}