import { FullSqlTask } from './FullSqlTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFullSqlTasksResponse extends SdkResponse {
    public tasks?: Array<FullSqlTask>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<FullSqlTask>): ListFullSqlTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotal(total: number): ListFullSqlTasksResponse {
        this['total'] = total;
        return this;
    }
}