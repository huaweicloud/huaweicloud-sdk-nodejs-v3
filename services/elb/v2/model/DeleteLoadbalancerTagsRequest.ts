

export class DeleteLoadbalancerTagsRequest {
    private 'loadbalancer_id': string | undefined;
    public key: string;
    public constructor(loadbalancerId?: any, key?: any) { 
        this['loadbalancer_id'] = loadbalancerId;
        this['key'] = key;
    }
    public withLoadbalancerId(loadbalancerId: string): DeleteLoadbalancerTagsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withKey(key: string): DeleteLoadbalancerTagsRequest {
        this['key'] = key;
        return this;
    }
}