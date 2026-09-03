import { SqlParseTask } from './SqlParseTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTasksByTaskIdResponse extends SdkResponse {
    public tasks?: Array<SqlParseTask>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<SqlParseTask>): ListTasksByTaskIdResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotal(total: number): ListTasksByTaskIdResponse {
        this['total'] = total;
        return this;
    }
}