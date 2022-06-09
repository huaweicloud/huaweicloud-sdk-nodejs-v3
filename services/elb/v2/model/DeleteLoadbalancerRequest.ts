

export class DeleteLoadbalancerRequest {
    private 'loadbalancer_id': string | undefined;
    public cascade?: boolean;
    public constructor(loadbalancerId?: any) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): DeleteLoadbalancerRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withCascade(cascade: boolean): DeleteLoadbalancerRequest {
        this['cascade'] = cascade;
        return this;
    }
}