import { OperationLogItem } from './OperationLogItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobOperationLogResponse extends SdkResponse {
    public count?: number;
    public operations?: Array<OperationLogItem>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListJobOperationLogResponse {
        this['count'] = count;
        return this;
    }
    public withOperations(operations: Array<OperationLogItem>): ListJobOperationLogResponse {
        this['operations'] = operations;
        return this;
    }
}