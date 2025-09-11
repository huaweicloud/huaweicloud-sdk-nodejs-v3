import { ListTenantQuotasResponseBodyQuotas } from './ListTenantQuotasResponseBodyQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTenantQuotasResponse extends SdkResponse {
    public quotas?: ListTenantQuotasResponseBodyQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: ListTenantQuotasResponseBodyQuotas): ListTenantQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}