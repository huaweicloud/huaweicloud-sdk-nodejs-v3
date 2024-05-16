import { QuotaResourcesDto } from './QuotaResourcesDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotaResponse extends SdkResponse {
    public quotas?: QuotaResourcesDto;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QuotaResourcesDto): ListQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}