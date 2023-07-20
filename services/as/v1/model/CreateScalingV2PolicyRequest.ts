import { CreateScalingPolicyV2Option } from './CreateScalingPolicyV2Option';


export class CreateScalingV2PolicyRequest {
    public body?: CreateScalingPolicyV2Option;
    public constructor() { 
    }
    public withBody(body: CreateScalingPolicyV2Option): CreateScalingV2PolicyRequest {
        this['body'] = body;
        return this;
    }
}