

export class DeleteLoadbalancerTagsRequest {
    private 'loadbalancer_id'?: string;
    public key?: string;
    public constructor(loadbalancerId?: string, key?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
        this['key'] = key;
    }
    public withLoadbalancerId(loadbalancerId: string): DeleteLoadbalancerTagsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withKey(key: string): DeleteLoadbalancerTagsRequest {
        this['key'] = key;
        return this;
    }
}