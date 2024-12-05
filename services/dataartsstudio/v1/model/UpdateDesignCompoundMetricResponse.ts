import { UpdateDesignCompoundMetricResultData } from './UpdateDesignCompoundMetricResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDesignCompoundMetricResponse extends SdkResponse {
    public data?: UpdateDesignCompoundMetricResultData;
    public constructor() { 
        super();
    }
    public withData(data: UpdateDesignCompoundMetricResultData): UpdateDesignCompoundMetricResponse {
        this['data'] = data;
        return this;
    }
}