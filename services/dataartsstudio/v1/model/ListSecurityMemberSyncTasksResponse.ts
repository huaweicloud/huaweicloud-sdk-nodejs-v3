import { MemberSyncTask } from './MemberSyncTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityMemberSyncTasksResponse extends SdkResponse {
    public total?: number;
    public tasks?: Array<MemberSyncTask>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityMemberSyncTasksResponse {
        this['total'] = total;
        return this;
    }
    public withTasks(tasks: Array<MemberSyncTask>): ListSecurityMemberSyncTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
}