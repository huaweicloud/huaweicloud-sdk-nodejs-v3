import { DeleteResultData } from './DeleteResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDesignCompoundMetricResponse extends SdkResponse {
    public data?: DeleteResultData;
    public constructor() { 
        super();
    }
    public withData(data: DeleteResultData): DeleteDesignCompoundMetricResponse {
        this['data'] = data;
        return this;
    }
}