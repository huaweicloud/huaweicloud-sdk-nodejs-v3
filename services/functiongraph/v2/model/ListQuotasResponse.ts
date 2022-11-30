import { ListQuotasResult } from './ListQuotasResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotasResponse extends SdkResponse {
    public quotas?: ListQuotasResult;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: ListQuotasResult): ListQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}