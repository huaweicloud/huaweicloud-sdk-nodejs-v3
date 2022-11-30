import { Quota } from './Quota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaResponse extends SdkResponse {
    public quotas?: Quota;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Quota): ShowQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}