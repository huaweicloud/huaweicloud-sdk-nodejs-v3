import { QuotasResourcesDto } from './QuotasResourcesDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotasResponse extends SdkResponse {
    public quotas?: QuotasResourcesDto;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QuotasResourcesDto): ListQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}