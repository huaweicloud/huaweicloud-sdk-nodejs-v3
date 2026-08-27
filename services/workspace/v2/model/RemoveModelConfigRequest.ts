import { RemoveModelConfigReq } from './RemoveModelConfigReq';


export class RemoveModelConfigRequest {
    public body?: RemoveModelConfigReq;
    public constructor() { 
    }
    public withBody(body: RemoveModelConfigReq): RemoveModelConfigRequest {
        this['body'] = body;
        return this;
    }
}