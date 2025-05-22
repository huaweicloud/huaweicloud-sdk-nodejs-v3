

export class ListClusterActionsRequest {
    private 'cluster_id'?: string;
    private 'action_name'?: string;
    public constructor(clusterId?: string, actionName?: string) { 
        this['cluster_id'] = clusterId;
        this['action_name'] = actionName;
    }
    public withClusterId(clusterId: string): ListClusterActionsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withActionName(actionName: string): ListClusterActionsRequest {
        this['action_name'] = actionName;
        return this;
    }
    public set actionName(actionName: string  | undefined) {
        this['action_name'] = actionName;
    }
    public get actionName(): string | undefined {
        return this['action_name'];
    }
}