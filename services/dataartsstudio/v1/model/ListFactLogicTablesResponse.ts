import { ListFactLogicTablesResultData } from './ListFactLogicTablesResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFactLogicTablesResponse extends SdkResponse {
    public data?: ListFactLogicTablesResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListFactLogicTablesResultData): ListFactLogicTablesResponse {
        this['data'] = data;
        return this;
    }
}