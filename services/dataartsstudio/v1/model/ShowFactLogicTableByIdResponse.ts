import { ShowFactLogicTableByIdResultData } from './ShowFactLogicTableByIdResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFactLogicTableByIdResponse extends SdkResponse {
    public data?: ShowFactLogicTableByIdResultData;
    public constructor() { 
        super();
    }
    public withData(data: ShowFactLogicTableByIdResultData): ShowFactLogicTableByIdResponse {
        this['data'] = data;
        return this;
    }
}