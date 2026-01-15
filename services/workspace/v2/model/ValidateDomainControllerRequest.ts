import { ValidateDcRequestBody } from './ValidateDcRequestBody';


export class ValidateDomainControllerRequest {
    public body?: ValidateDcRequestBody;
    public constructor() { 
    }
    public withBody(body: ValidateDcRequestBody): ValidateDomainControllerRequest {
        this['body'] = body;
        return this;
    }
}