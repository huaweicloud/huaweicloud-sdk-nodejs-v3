import { SqlParseTask } from './SqlParseTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFullSqlTasksApiResponse extends SdkResponse {
    public total?: number;
    public tasks?: Array<SqlParseTask>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListFullSqlTasksApiResponse {
        this['total'] = total;
        return this;
    }
    public withTasks(tasks: Array<SqlParseTask>): ListFullSqlTasksApiResponse {
        this['tasks'] = tasks;
        return this;
    }
}