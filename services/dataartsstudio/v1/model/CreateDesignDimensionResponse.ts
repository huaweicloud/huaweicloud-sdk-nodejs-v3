import { ShowDimensionByIdResultData } from './ShowDimensionByIdResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDesignDimensionResponse extends SdkResponse {
    public data?: ShowDimensionByIdResultData;
    public constructor() { 
        super();
    }
    public withData(data: ShowDimensionByIdResultData): CreateDesignDimensionResponse {
        this['data'] = data;
        return this;
    }
}