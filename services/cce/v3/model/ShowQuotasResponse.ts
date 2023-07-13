import { QuotaResource } from './QuotaResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotasResponse extends SdkResponse {
    public quotas?: Array<QuotaResource>;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<QuotaResource>): ShowQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}