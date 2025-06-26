import { CreateOrUpdateScalingPolicyReq } from './CreateOrUpdateScalingPolicyReq';


export class CreateOrUpdateScalingPolicyRequest {
    public body?: CreateOrUpdateScalingPolicyReq;
    public constructor() { 
    }
    public withBody(body: CreateOrUpdateScalingPolicyReq): CreateOrUpdateScalingPolicyRequest {
        this['body'] = body;
        return this;
    }
}