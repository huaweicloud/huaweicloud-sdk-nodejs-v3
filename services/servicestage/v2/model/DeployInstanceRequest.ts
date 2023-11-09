import { InstanceDeployment } from './InstanceDeployment';


export class DeployInstanceRequest {
    public body?: InstanceDeployment;
    public constructor() { 
    }
    public withBody(body: InstanceDeployment): DeployInstanceRequest {
        this['body'] = body;
        return this;
    }
}