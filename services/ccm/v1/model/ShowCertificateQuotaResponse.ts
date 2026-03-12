import { Quotas } from './Quotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertificateQuotaResponse extends SdkResponse {
    public quotas?: Quotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Quotas): ShowCertificateQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}