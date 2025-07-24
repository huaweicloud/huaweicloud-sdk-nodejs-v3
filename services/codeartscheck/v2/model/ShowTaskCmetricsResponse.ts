import { MetricInfo } from './MetricInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskCmetricsResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'creator_id'?: string;
    private 'git_url'?: string;
    private 'git_branch'?: string;
    private 'last_check_time'?: string;
    private 'last_exec_time'?: string;
    private 'check_type'?: string;
    private 'created_at'?: string;
    private 'metric_info'?: MetricInfo;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowTaskCmetricsResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): ShowTaskCmetricsResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withCreatorId(creatorId: string): ShowTaskCmetricsResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withGitUrl(gitUrl: string): ShowTaskCmetricsResponse {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withGitBranch(gitBranch: string): ShowTaskCmetricsResponse {
        this['git_branch'] = gitBranch;
        return this;
    }
    public set gitBranch(gitBranch: string  | undefined) {
        this['git_branch'] = gitBranch;
    }
    public get gitBranch(): string | undefined {
        return this['git_branch'];
    }
    public withLastCheckTime(lastCheckTime: string): ShowTaskCmetricsResponse {
        this['last_check_time'] = lastCheckTime;
        return this;
    }
    public set lastCheckTime(lastCheckTime: string  | undefined) {
        this['last_check_time'] = lastCheckTime;
    }
    public get lastCheckTime(): string | undefined {
        return this['last_check_time'];
    }
    public withLastExecTime(lastExecTime: string): ShowTaskCmetricsResponse {
        this['last_exec_time'] = lastExecTime;
        return this;
    }
    public set lastExecTime(lastExecTime: string  | undefined) {
        this['last_exec_time'] = lastExecTime;
    }
    public get lastExecTime(): string | undefined {
        return this['last_exec_time'];
    }
    public withCheckType(checkType: string): ShowTaskCmetricsResponse {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withCreatedAt(createdAt: string): ShowTaskCmetricsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withMetricInfo(metricInfo: MetricInfo): ShowTaskCmetricsResponse {
        this['metric_info'] = metricInfo;
        return this;
    }
    public set metricInfo(metricInfo: MetricInfo  | undefined) {
        this['metric_info'] = metricInfo;
    }
    public get metricInfo(): MetricInfo | undefined {
        return this['metric_info'];
    }
}