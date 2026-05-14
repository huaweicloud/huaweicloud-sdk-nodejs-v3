import { EditingTaskInfo } from './EditingTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssetEditTaskResponse extends SdkResponse {
    public total?: number;
    public tasks?: Array<EditingTaskInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAssetEditTaskResponse {
        this['total'] = total;
        return this;
    }
    public withTasks(tasks: Array<EditingTaskInfo>): ListAssetEditTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
}