import { TaskInfo } from './TaskInfo';


export class UpdateOperationalTaskRequest {
    private 'cluster_id'?: string;
    private 'task_id'?: string;
    public body?: TaskInfo;
    public constructor(clusterId?: string, taskId?: string) { 
        this['cluster_id'] = clusterId;
        this['task_id'] = taskId;
    }
    public withClusterId(clusterId: string): UpdateOperationalTaskRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withTaskId(taskId: string): UpdateOperationalTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: TaskInfo): UpdateOperationalTaskRequest {
        this['body'] = body;
        return this;
    }
}