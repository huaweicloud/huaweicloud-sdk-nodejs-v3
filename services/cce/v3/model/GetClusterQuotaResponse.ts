import { GetClusterQuotaBodyQuotas } from './GetClusterQuotaBodyQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetClusterQuotaResponse extends SdkResponse {
    public quotas?: GetClusterQuotaBodyQuotas;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: GetClusterQuotaBodyQuotas): GetClusterQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}