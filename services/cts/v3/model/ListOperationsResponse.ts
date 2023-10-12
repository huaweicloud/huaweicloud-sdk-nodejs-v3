import { ListOperation } from './ListOperation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOperationsResponse extends SdkResponse {
    public operations?: Array<ListOperation>;
    public constructor() { 
        super();
    }
    public withOperations(operations: Array<ListOperation>): ListOperationsResponse {
        this['operations'] = operations;
        return this;
    }
}