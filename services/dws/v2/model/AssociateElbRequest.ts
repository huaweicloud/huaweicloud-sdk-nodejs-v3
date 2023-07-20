

export class AssociateElbRequest {
    private 'cluster_id'?: string;
    private 'elb_id'?: string;
    public constructor(clusterId?: string, elbId?: string) { 
        this['cluster_id'] = clusterId;
        this['elb_id'] = elbId;
    }
    public withClusterId(clusterId: string): AssociateElbRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withElbId(elbId: string): AssociateElbRequest {
        this['elb_id'] = elbId;
        return this;
    }
    public set elbId(elbId: string  | undefined) {
        this['elb_id'] = elbId;
    }
    public get elbId(): string | undefined {
        return this['elb_id'];
    }
}