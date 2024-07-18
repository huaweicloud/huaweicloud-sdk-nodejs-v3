

export class ShowAutopilotPreCheckRequest {
    private 'cluster_id'?: string;
    private 'task_id'?: string;
    public constructor(clusterId?: string, taskId?: string) { 
        this['cluster_id'] = clusterId;
        this['task_id'] = taskId;
    }
    public withClusterId(clusterId: string): ShowAutopilotPreCheckRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withTaskId(taskId: string): ShowAutopilotPreCheckRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}