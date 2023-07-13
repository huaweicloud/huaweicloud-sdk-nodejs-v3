import { Quotas } from './Quotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserQuotasResponse extends SdkResponse {
    public quotas?: Quotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Quotas): ShowUserQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}