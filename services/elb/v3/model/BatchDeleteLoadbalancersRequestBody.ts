

export class BatchDeleteLoadbalancersRequestBody {
    private 'unbounded_pool'?: boolean;
    private 'public_ip'?: boolean;
    private 'loadbalancer_ids'?: Array<string>;
    public constructor(loadbalancerIds?: Array<string>) { 
        this['loadbalancer_ids'] = loadbalancerIds;
    }
    public withUnboundedPool(unboundedPool: boolean): BatchDeleteLoadbalancersRequestBody {
        this['unbounded_pool'] = unboundedPool;
        return this;
    }
    public set unboundedPool(unboundedPool: boolean  | undefined) {
        this['unbounded_pool'] = unboundedPool;
    }
    public get unboundedPool(): boolean | undefined {
        return this['unbounded_pool'];
    }
    public withPublicIp(publicIp: boolean): BatchDeleteLoadbalancersRequestBody {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: boolean  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): boolean | undefined {
        return this['public_ip'];
    }
    public withLoadbalancerIds(loadbalancerIds: Array<string>): BatchDeleteLoadbalancersRequestBody {
        this['loadbalancer_ids'] = loadbalancerIds;
        return this;
    }
    public set loadbalancerIds(loadbalancerIds: Array<string>  | undefined) {
        this['loadbalancer_ids'] = loadbalancerIds;
    }
    public get loadbalancerIds(): Array<string> | undefined {
        return this['loadbalancer_ids'];
    }
}