import { DeleteEmailTemplateRequestBody } from './DeleteEmailTemplateRequestBody';


export class DeleteEmailTemplateRequest {
    public body?: DeleteEmailTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteEmailTemplateRequestBody): DeleteEmailTemplateRequest {
        this['body'] = body;
        return this;
    }
}