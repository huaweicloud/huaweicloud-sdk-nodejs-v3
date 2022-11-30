import { CreateLoadBalancerRequestBody } from './CreateLoadBalancerRequestBody';


export class CreateLoadBalancerRequest {
    public body?: CreateLoadBalancerRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateLoadBalancerRequestBody): CreateLoadBalancerRequest {
        this['body'] = body;
        return this;
    }
}