import { QuotaResource } from './QuotaResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutopilotQuotasResponse extends SdkResponse {
    public quotas?: Array<QuotaResource>;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<QuotaResource>): ShowAutopilotQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}