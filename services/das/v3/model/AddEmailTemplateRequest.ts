import { AddEmailTemplateRequestBody } from './AddEmailTemplateRequestBody';


export class AddEmailTemplateRequest {
    public body?: AddEmailTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: AddEmailTemplateRequestBody): AddEmailTemplateRequest {
        this['body'] = body;
        return this;
    }
}