import { ValidateWhitelistUserRequestBody } from './ValidateWhitelistUserRequestBody';


export class ValidateWhitelistUserRequest {
    public body?: ValidateWhitelistUserRequestBody;
    public constructor() { 
    }
    public withBody(body: ValidateWhitelistUserRequestBody): ValidateWhitelistUserRequest {
        this['body'] = body;
        return this;
    }
}