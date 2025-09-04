import { ValidateSeverGroupReq } from './ValidateSeverGroupReq';


export class ValidateServerGroupRequest {
    public body?: ValidateSeverGroupReq;
    public constructor() { 
    }
    public withBody(body: ValidateSeverGroupReq): ValidateServerGroupRequest {
        this['body'] = body;
        return this;
    }
}