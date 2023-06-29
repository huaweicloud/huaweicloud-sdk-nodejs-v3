import { ListQuotasRespQuotas } from './ListQuotasRespQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotas2Response extends SdkResponse {
    public quotas?: ListQuotasRespQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: ListQuotasRespQuotas): ListQuotas2Response {
        this['quotas'] = quotas;
        return this;
    }
}