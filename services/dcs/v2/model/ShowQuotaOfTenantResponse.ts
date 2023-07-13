import { QueryTenantQuotaRespQuotas } from './QueryTenantQuotaRespQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaOfTenantResponse extends SdkResponse {
    public quotas?: QueryTenantQuotaRespQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QueryTenantQuotaRespQuotas): ShowQuotaOfTenantResponse {
        this['quotas'] = quotas;
        return this;
    }
}