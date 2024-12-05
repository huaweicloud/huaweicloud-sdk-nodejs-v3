import { ShowDimensionByIdResultData } from './ShowDimensionByIdResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDesignDimensionResponse extends SdkResponse {
    public data?: ShowDimensionByIdResultData;
    public constructor() { 
        super();
    }
    public withData(data: ShowDimensionByIdResultData): UpdateDesignDimensionResponse {
        this['data'] = data;
        return this;
    }
}