import { TaskPolicy } from './TaskPolicy';
import { TaskProgress } from './TaskProgress';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBatchTaskResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'task_type'?: string;
    private 'task_mode'?: string;
    private 'task_ext_info'?: object;
    public targets?: Array<string>;
    private 'targets_filter'?: { [key: string]: object; };
    public document?: object;
    private 'task_policy'?: TaskPolicy;
    public status?: string;
    private 'status_desc'?: string;
    private 'task_progress'?: TaskProgress;
    private 'create_time'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): CreateBatchTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): CreateBatchTaskResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskType(taskType: string): CreateBatchTaskResponse {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withTaskMode(taskMode: string): CreateBatchTaskResponse {
        this['task_mode'] = taskMode;
        return this;
    }
    public set taskMode(taskMode: string  | undefined) {
        this['task_mode'] = taskMode;
    }
    public get taskMode(): string | undefined {
        return this['task_mode'];
    }
    public withTaskExtInfo(taskExtInfo: object): CreateBatchTaskResponse {
        this['task_ext_info'] = taskExtInfo;
        return this;
    }
    public set taskExtInfo(taskExtInfo: object  | undefined) {
        this['task_ext_info'] = taskExtInfo;
    }
    public get taskExtInfo(): object | undefined {
        return this['task_ext_info'];
    }
    public withTargets(targets: Array<string>): CreateBatchTaskResponse {
        this['targets'] = targets;
        return this;
    }
    public withTargetsFilter(targetsFilter: { [key: string]: object; }): CreateBatchTaskResponse {
        this['targets_filter'] = targetsFilter;
        return this;
    }
    public set targetsFilter(targetsFilter: { [key: string]: object; }  | undefined) {
        this['targets_filter'] = targetsFilter;
    }
    public get targetsFilter(): { [key: string]: object; } | undefined {
        return this['targets_filter'];
    }
    public withDocument(document: object): CreateBatchTaskResponse {
        this['document'] = document;
        return this;
    }
    public withTaskPolicy(taskPolicy: TaskPolicy): CreateBatchTaskResponse {
        this['task_policy'] = taskPolicy;
        return this;
    }
    public set taskPolicy(taskPolicy: TaskPolicy  | undefined) {
        this['task_policy'] = taskPolicy;
    }
    public get taskPolicy(): TaskPolicy | undefined {
        return this['task_policy'];
    }
    public withStatus(status: string): CreateBatchTaskResponse {
        this['status'] = status;
        return this;
    }
    public withStatusDesc(statusDesc: string): CreateBatchTaskResponse {
        this['status_desc'] = statusDesc;
        return this;
    }
    public set statusDesc(statusDesc: string  | undefined) {
        this['status_desc'] = statusDesc;
    }
    public get statusDesc(): string | undefined {
        return this['status_desc'];
    }
    public withTaskProgress(taskProgress: TaskProgress): CreateBatchTaskResponse {
        this['task_progress'] = taskProgress;
        return this;
    }
    public set taskProgress(taskProgress: TaskProgress  | undefined) {
        this['task_progress'] = taskProgress;
    }
    public get taskProgress(): TaskProgress | undefined {
        return this['task_progress'];
    }
    public withCreateTime(createTime: string): CreateBatchTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}