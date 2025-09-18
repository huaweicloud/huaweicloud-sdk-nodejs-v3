import { SubTaskInfo } from './SubTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskDetailResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'created_at'?: string;
    private 'update_at'?: string;
    public process?: string;
    public status?: string;
    private 'sub_task_list'?: Array<SubTaskInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowTaskDetailResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ShowTaskDetailResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withJobId(jobId: string): ShowTaskDetailResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): ShowTaskDetailResponse {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withCreatedAt(createdAt: string): ShowTaskDetailResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdateAt(updateAt: string): ShowTaskDetailResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withProcess(process: string): ShowTaskDetailResponse {
        this['process'] = process;
        return this;
    }
    public withStatus(status: string): ShowTaskDetailResponse {
        this['status'] = status;
        return this;
    }
    public withSubTaskList(subTaskList: Array<SubTaskInfo>): ShowTaskDetailResponse {
        this['sub_task_list'] = subTaskList;
        return this;
    }
    public set subTaskList(subTaskList: Array<SubTaskInfo>  | undefined) {
        this['sub_task_list'] = subTaskList;
    }
    public get subTaskList(): Array<SubTaskInfo> | undefined {
        return this['sub_task_list'];
    }
    public withXRequestId(xRequestId: string): ShowTaskDetailResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}