import { ListDimensionLogicTablesResultData } from './ListDimensionLogicTablesResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDimensionLogicTablesResponse extends SdkResponse {
    public data?: ListDimensionLogicTablesResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListDimensionLogicTablesResultData): ListDimensionLogicTablesResponse {
        this['data'] = data;
        return this;
    }
}