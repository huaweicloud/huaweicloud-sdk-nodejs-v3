import { QueryQuotaInfo } from './QueryQuotaInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotasResponse extends SdkResponse {
    public quotas?: QueryQuotaInfo;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QueryQuotaInfo): ShowQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}