

export class DeleteAiOpsRequest {
    private 'cluster_id'?: string;
    private 'aiops_id'?: string;
    public constructor(clusterId?: string, aiopsId?: string) { 
        this['cluster_id'] = clusterId;
        this['aiops_id'] = aiopsId;
    }
    public withClusterId(clusterId: string): DeleteAiOpsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAiopsId(aiopsId: string): DeleteAiOpsRequest {
        this['aiops_id'] = aiopsId;
        return this;
    }
    public set aiopsId(aiopsId: string  | undefined) {
        this['aiops_id'] = aiopsId;
    }
    public get aiopsId(): string | undefined {
        return this['aiops_id'];
    }
}