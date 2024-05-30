import { ShowDimensionLogicTableByIdResultData } from './ShowDimensionLogicTableByIdResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDimensionLogicTableByIdResponse extends SdkResponse {
    public data?: ShowDimensionLogicTableByIdResultData;
    public constructor() { 
        super();
    }
    public withData(data: ShowDimensionLogicTableByIdResultData): ShowDimensionLogicTableByIdResponse {
        this['data'] = data;
        return this;
    }
}