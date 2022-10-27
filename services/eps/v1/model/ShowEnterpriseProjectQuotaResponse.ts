import { QuotasDetail } from './QuotasDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEnterpriseProjectQuotaResponse extends SdkResponse {
    public quotas?: QuotasDetail;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QuotasDetail): ShowEnterpriseProjectQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}