

export class DeleteLoadBalancerCascadeOption {
    private 'unbounded_pool'?: boolean;
    private 'public_ip'?: boolean;
    public constructor() { 
    }
    public withUnboundedPool(unboundedPool: boolean): DeleteLoadBalancerCascadeOption {
        this['unbounded_pool'] = unboundedPool;
        return this;
    }
    public set unboundedPool(unboundedPool: boolean  | undefined) {
        this['unbounded_pool'] = unboundedPool;
    }
    public get unboundedPool(): boolean | undefined {
        return this['unbounded_pool'];
    }
    public withPublicIp(publicIp: boolean): DeleteLoadBalancerCascadeOption {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: boolean  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): boolean | undefined {
        return this['public_ip'];
    }
}