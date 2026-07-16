import { TrainingQuotaResponse } from './TrainingQuotaResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrainingQuotasResponse extends SdkResponse {
    public quotas?: Array<TrainingQuotaResponse>;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<TrainingQuotaResponse>): ShowTrainingQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}