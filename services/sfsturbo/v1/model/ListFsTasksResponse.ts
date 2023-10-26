import { OneFsTaskResp } from './OneFsTaskResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFsTasksResponse extends SdkResponse {
    public tasks?: Array<OneFsTaskResp>;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<OneFsTaskResp>): ListFsTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
}