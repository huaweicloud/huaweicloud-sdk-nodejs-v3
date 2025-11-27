import { AccessControlTask } from './AccessControlTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessControlTaskResponse extends SdkResponse {
    public total?: number;
    private 'access_control_tasks'?: Array<AccessControlTask>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAccessControlTaskResponse {
        this['total'] = total;
        return this;
    }
    public withAccessControlTasks(accessControlTasks: Array<AccessControlTask>): ListAccessControlTaskResponse {
        this['access_control_tasks'] = accessControlTasks;
        return this;
    }
    public set accessControlTasks(accessControlTasks: Array<AccessControlTask>  | undefined) {
        this['access_control_tasks'] = accessControlTasks;
    }
    public get accessControlTasks(): Array<AccessControlTask> | undefined {
        return this['access_control_tasks'];
    }
}