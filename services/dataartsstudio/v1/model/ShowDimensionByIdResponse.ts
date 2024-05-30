import { ShowDimensionByIdResultData } from './ShowDimensionByIdResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDimensionByIdResponse extends SdkResponse {
    public data?: ShowDimensionByIdResultData;
    public constructor() { 
        super();
    }
    public withData(data: ShowDimensionByIdResultData): ShowDimensionByIdResponse {
        this['data'] = data;
        return this;
    }
}