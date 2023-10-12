

export class RetryUpgradeTaskRequest {
    private 'cluster_id'?: string;
    private 'action_id'?: string;
    private 'retry_mode'?: string;
    public constructor(clusterId?: string, actionId?: string) { 
        this['cluster_id'] = clusterId;
        this['action_id'] = actionId;
    }
    public withClusterId(clusterId: string): RetryUpgradeTaskRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withActionId(actionId: string): RetryUpgradeTaskRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withRetryMode(retryMode: string): RetryUpgradeTaskRequest {
        this['retry_mode'] = retryMode;
        return this;
    }
    public set retryMode(retryMode: string  | undefined) {
        this['retry_mode'] = retryMode;
    }
    public get retryMode(): string | undefined {
        return this['retry_mode'];
    }
}