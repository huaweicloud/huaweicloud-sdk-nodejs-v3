import { SqlParseTask } from './SqlParseTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTasksByBatchIdResponse extends SdkResponse {
    public tasks?: Array<SqlParseTask>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<SqlParseTask>): ListTasksByBatchIdResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotal(total: number): ListTasksByBatchIdResponse {
        this['total'] = total;
        return this;
    }
}