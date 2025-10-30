import { QuotaResources } from './QuotaResources';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotasResponse extends SdkResponse {
    public quotas?: QuotaResources;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QuotaResources): ListQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}