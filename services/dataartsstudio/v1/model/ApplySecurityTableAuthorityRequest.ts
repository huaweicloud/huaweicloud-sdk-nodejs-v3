import { ApplyTableAuthorityRequestBody } from './ApplyTableAuthorityRequestBody';


export class ApplySecurityTableAuthorityRequest {
    public body?: ApplyTableAuthorityRequestBody;
    public constructor() { 
    }
    public withBody(body: ApplyTableAuthorityRequestBody): ApplySecurityTableAuthorityRequest {
        this['body'] = body;
        return this;
    }
}