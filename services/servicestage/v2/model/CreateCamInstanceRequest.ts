import { InstanceCreation } from './InstanceCreation';


export class CreateCamInstanceRequest {
    public body?: InstanceCreation;
    public constructor() { 
    }
    public withBody(body: InstanceCreation): CreateCamInstanceRequest {
        this['body'] = body;
        return this;
    }
}