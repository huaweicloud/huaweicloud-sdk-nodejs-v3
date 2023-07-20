import { Quota } from './Quota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotasResponse extends SdkResponse {
    public quotas?: Array<Quota>;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<Quota>): ShowQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}