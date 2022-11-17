import { SingleBackgroundTask } from './SingleBackgroundTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackgroundTaskResponse extends SdkResponse {
    private 'task_count'?: string | undefined;
    public tasks?: Array<SingleBackgroundTask>;
    private 'updated_at'?: string | undefined;
    private 'created_at'?: string | undefined;
    public status?: string;
    public constructor() { 
        super();
    }
    public withTaskCount(taskCount: string): ListBackgroundTaskResponse {
        this['task_count'] = taskCount;
        return this;
    }
    public set taskCount(taskCount: string | undefined) {
        this['task_count'] = taskCount;
    }
    public get taskCount() {
        return this['task_count'];
    }
    public withTasks(tasks: Array<SingleBackgroundTask>): ListBackgroundTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withUpdatedAt(updatedAt: string): ListBackgroundTaskResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withCreatedAt(createdAt: string): ListBackgroundTaskResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withStatus(status: string): ListBackgroundTaskResponse {
        this['status'] = status;
        return this;
    }
}