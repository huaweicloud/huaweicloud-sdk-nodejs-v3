import { CommonQueryTaskRsp } from './CommonQueryTaskRsp';
import { RemuxTask } from './RemuxTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRemuxTaskResponse extends SdkResponse {
    public total?: number;
    public tasks?: Array<RemuxTask>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRemuxTaskResponse {
        this['total'] = total;
        return this;
    }
    public withTasks(tasks: Array<RemuxTask>): ListRemuxTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
}