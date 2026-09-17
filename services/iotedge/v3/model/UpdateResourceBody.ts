

export class UpdateResourceBody {
    private 'cluster_id'?: string;
    public action?: string;
    public constructor(clusterId?: string, action?: string) { 
        this['cluster_id'] = clusterId;
        this['action'] = action;
    }
    public withClusterId(clusterId: string): UpdateResourceBody {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAction(action: string): UpdateResourceBody {
        this['action'] = action;
        return this;
    }
}