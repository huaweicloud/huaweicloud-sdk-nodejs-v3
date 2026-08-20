import { InstanceQuotaResult } from './InstanceQuotaResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceQuotasResponse extends SdkResponse {
    public quotas?: InstanceQuotaResult;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: InstanceQuotaResult): ShowInstanceQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}