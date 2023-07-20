import { CreateScalingGroupOption } from './CreateScalingGroupOption';


export class CreateScalingGroupRequest {
    public body?: CreateScalingGroupOption;
    public constructor() { 
    }
    public withBody(body: CreateScalingGroupOption): CreateScalingGroupRequest {
        this['body'] = body;
        return this;
    }
}