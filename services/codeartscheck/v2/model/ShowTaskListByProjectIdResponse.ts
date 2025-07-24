import { SimpleTaskInfoV2 } from './SimpleTaskInfoV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskListByProjectIdResponse extends SdkResponse {
    public tasks?: Array<SimpleTaskInfoV2>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<SimpleTaskInfoV2>): ShowTaskListByProjectIdResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotal(total: number): ShowTaskListByProjectIdResponse {
        this['total'] = total;
        return this;
    }
}