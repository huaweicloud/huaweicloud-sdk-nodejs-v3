import { SqlParseTask } from './SqlParseTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTasksBySqlTemplateIdResponse extends SdkResponse {
    public tasks?: Array<SqlParseTask>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<SqlParseTask>): ListTasksBySqlTemplateIdResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotal(total: number): ListTasksBySqlTemplateIdResponse {
        this['total'] = total;
        return this;
    }
}