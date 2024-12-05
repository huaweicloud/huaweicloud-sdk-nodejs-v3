import { CreateDesignCompoundMetricResultData } from './CreateDesignCompoundMetricResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDesignCompoundMetricResponse extends SdkResponse {
    public data?: CreateDesignCompoundMetricResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateDesignCompoundMetricResultData): CreateDesignCompoundMetricResponse {
        this['data'] = data;
        return this;
    }
}