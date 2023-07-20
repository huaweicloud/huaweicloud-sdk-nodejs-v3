import { ProjectQuotasResult } from './ProjectQuotasResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectQuotasResponse extends SdkResponse {
    public quotas?: ProjectQuotasResult;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: ProjectQuotasResult): ShowProjectQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}