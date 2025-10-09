import { SubTaskInfo } from './SubTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskDetailsResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'job_id'?: string;
    private 'job_name'?: string;
    public status?: string;
    private 'sub_task_list'?: Array<SubTaskInfo>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowTaskDetailsResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ShowTaskDetailsResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withJobId(jobId: string): ShowTaskDetailsResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): ShowTaskDetailsResponse {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withStatus(status: string): ShowTaskDetailsResponse {
        this['status'] = status;
        return this;
    }
    public withSubTaskList(subTaskList: Array<SubTaskInfo>): ShowTaskDetailsResponse {
        this['sub_task_list'] = subTaskList;
        return this;
    }
    public set subTaskList(subTaskList: Array<SubTaskInfo>  | undefined) {
        this['sub_task_list'] = subTaskList;
    }
    public get subTaskList(): Array<SubTaskInfo> | undefined {
        return this['sub_task_list'];
    }
}