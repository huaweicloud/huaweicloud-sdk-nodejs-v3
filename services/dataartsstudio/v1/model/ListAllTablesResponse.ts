import { ListAllTablesResultData } from './ListAllTablesResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllTablesResponse extends SdkResponse {
    public data?: ListAllTablesResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListAllTablesResultData): ListAllTablesResponse {
        this['data'] = data;
        return this;
    }
}