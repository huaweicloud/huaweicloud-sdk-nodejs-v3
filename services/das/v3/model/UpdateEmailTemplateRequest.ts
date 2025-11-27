import { UpdateEmailTemplateRequestBody } from './UpdateEmailTemplateRequestBody';


export class UpdateEmailTemplateRequest {
    public body?: UpdateEmailTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateEmailTemplateRequestBody): UpdateEmailTemplateRequest {
        this['body'] = body;
        return this;
    }
}