

export class DisassociateElbRequest {
    private 'cluster_id': string | undefined;
    private 'elb_id': string | undefined;
    public constructor(clusterId?: any, elbId?: any) { 
        this['cluster_id'] = clusterId;
        this['elb_id'] = elbId;
    }
    public withClusterId(clusterId: string): DisassociateElbRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withElbId(elbId: string): DisassociateElbRequest {
        this['elb_id'] = elbId;
        return this;
    }
    public set elbId(elbId: string | undefined) {
        this['elb_id'] = elbId;
    }
    public get elbId() {
        return this['elb_id'];
    }
}