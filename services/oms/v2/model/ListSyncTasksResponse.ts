import { SyncTaskInfo } from './SyncTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSyncTasksResponse extends SdkResponse {
    public tasks?: Array<SyncTaskInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<SyncTaskInfo>): ListSyncTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withCount(count: number): ListSyncTasksResponse {
        this['count'] = count;
        return this;
    }
}