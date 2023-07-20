import { ProjectQuotas } from './ProjectQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGaussMySqlProjectQuotasResponse extends SdkResponse {
    public quotas?: ProjectQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: ProjectQuotas): ShowGaussMySqlProjectQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}