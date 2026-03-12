import { Quotas } from './Quotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertificateAuthorityQuotaResponse extends SdkResponse {
    public quotas?: Quotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Quotas): ShowCertificateAuthorityQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}