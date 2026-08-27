import { ApplyModelConfigReq } from './ApplyModelConfigReq';


export class ApplyModelConfigRequest {
    public body?: ApplyModelConfigReq;
    public constructor() { 
    }
    public withBody(body: ApplyModelConfigReq): ApplyModelConfigRequest {
        this['body'] = body;
        return this;
    }
}