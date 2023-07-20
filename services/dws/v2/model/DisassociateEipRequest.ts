

export class DisassociateEipRequest {
    private 'cluster_id'?: string;
    private 'eip_id'?: string;
    public constructor(clusterId?: string, eipId?: string) { 
        this['cluster_id'] = clusterId;
        this['eip_id'] = eipId;
    }
    public withClusterId(clusterId: string): DisassociateEipRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withEipId(eipId: string): DisassociateEipRequest {
        this['eip_id'] = eipId;
        return this;
    }
    public set eipId(eipId: string  | undefined) {
        this['eip_id'] = eipId;
    }
    public get eipId(): string | undefined {
        return this['eip_id'];
    }
}