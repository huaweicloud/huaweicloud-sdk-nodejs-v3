import { EngineQuotaV2Quotas } from './EngineQuotaV2Quotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEngineQuotasResponse extends SdkResponse {
    public quotas?: EngineQuotaV2Quotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: EngineQuotaV2Quotas): ShowEngineQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}