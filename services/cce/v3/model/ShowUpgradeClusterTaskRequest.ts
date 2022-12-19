

export class ShowUpgradeClusterTaskRequest {
    private 'cluster_id': string | undefined;
    private 'task_id': string | undefined;
    public constructor(clusterId?: any, taskId?: any) { 
        this['cluster_id'] = clusterId;
        this['task_id'] = taskId;
    }
    public withClusterId(clusterId: string): ShowUpgradeClusterTaskRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withTaskId(taskId: string): ShowUpgradeClusterTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
}