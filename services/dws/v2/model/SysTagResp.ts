

export class SysTagResp {
    private 'cluster_id'?: string;
    private 'eps_id'?: string;
    public constructor() { 
    }
    public withClusterId(clusterId: string): SysTagResp {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withEpsId(epsId: string): SysTagResp {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
}