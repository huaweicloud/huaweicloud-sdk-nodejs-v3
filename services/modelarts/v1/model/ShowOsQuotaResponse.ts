import { Quota } from './Quota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOsQuotaResponse extends SdkResponse {
    public quotas?: Quota;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Quota): ShowOsQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}