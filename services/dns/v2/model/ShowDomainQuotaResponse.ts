import { DomainQuotaResponseQuotas } from './DomainQuotaResponseQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainQuotaResponse extends SdkResponse {
    public quotas?: Array<DomainQuotaResponseQuotas>;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<DomainQuotaResponseQuotas>): ShowDomainQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}