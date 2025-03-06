import { InstanceTaskDetail } from './InstanceTaskDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateScheduleTaskResponse extends SdkResponse {
    private 'instance_tasks'?: Array<InstanceTaskDetail>;
    public constructor() { 
        super();
    }
    public withInstanceTasks(instanceTasks: Array<InstanceTaskDetail>): CreateScheduleTaskResponse {
        this['instance_tasks'] = instanceTasks;
        return this;
    }
    public set instanceTasks(instanceTasks: Array<InstanceTaskDetail>  | undefined) {
        this['instance_tasks'] = instanceTasks;
    }
    public get instanceTasks(): Array<InstanceTaskDetail> | undefined {
        return this['instance_tasks'];
    }
}