import { CreateLoadbalancerRequestBody } from './CreateLoadbalancerRequestBody';


export class CreateLoadbalancerRequest {
    public body?: CreateLoadbalancerRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateLoadbalancerRequestBody): CreateLoadbalancerRequest {
        this['body'] = body;
        return this;
    }
}