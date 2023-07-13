import { Quotas } from './Quotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaResponse extends SdkResponse {
    public quotas?: Array<Quotas>;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<Quotas>): ShowQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}