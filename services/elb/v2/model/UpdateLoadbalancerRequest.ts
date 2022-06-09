import { UpdateLoadbalancerRequestBody } from './UpdateLoadbalancerRequestBody';


export class UpdateLoadbalancerRequest {
    private 'loadbalancer_id': string | undefined;
    public body?: UpdateLoadbalancerRequestBody;
    public constructor(loadbalancerId?: any) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): UpdateLoadbalancerRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withBody(body: UpdateLoadbalancerRequestBody): UpdateLoadbalancerRequest {
        this['body'] = body;
        return this;
    }
}