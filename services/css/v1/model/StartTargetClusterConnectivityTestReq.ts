

export class StartTargetClusterConnectivityTestReq {
    private 'target_cluster_id'?: string;
    public constructor(targetClusterId?: string) { 
        this['target_cluster_id'] = targetClusterId;
    }
    public withTargetClusterId(targetClusterId: string): StartTargetClusterConnectivityTestReq {
        this['target_cluster_id'] = targetClusterId;
        return this;
    }
    public set targetClusterId(targetClusterId: string  | undefined) {
        this['target_cluster_id'] = targetClusterId;
    }
    public get targetClusterId(): string | undefined {
        return this['target_cluster_id'];
    }
}