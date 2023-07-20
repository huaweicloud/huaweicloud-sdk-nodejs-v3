import { CreateScalingConfigOption } from './CreateScalingConfigOption';


export class CreateScalingConfigRequest {
    public body?: CreateScalingConfigOption;
    public constructor() { 
    }
    public withBody(body: CreateScalingConfigOption): CreateScalingConfigRequest {
        this['body'] = body;
        return this;
    }
}