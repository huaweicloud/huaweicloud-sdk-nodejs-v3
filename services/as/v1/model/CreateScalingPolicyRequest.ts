import { CreateScalingPolicyOption } from './CreateScalingPolicyOption';


export class CreateScalingPolicyRequest {
    public body?: CreateScalingPolicyOption;
    public constructor() { 
    }
    public withBody(body: CreateScalingPolicyOption): CreateScalingPolicyRequest {
        this['body'] = body;
        return this;
    }
}