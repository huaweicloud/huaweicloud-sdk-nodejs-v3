

export class UpgradeDetailRequest {
    private 'cluster_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'action_mode'?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpgradeDetailRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withOffset(offset: number): UpgradeDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): UpgradeDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withActionMode(actionMode: string): UpgradeDetailRequest {
        this['action_mode'] = actionMode;
        return this;
    }
    public set actionMode(actionMode: string  | undefined) {
        this['action_mode'] = actionMode;
    }
    public get actionMode(): string | undefined {
        return this['action_mode'];
    }
}