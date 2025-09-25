import { DeleteTemplateReqNew } from './DeleteTemplateReqNew';


export class DeleteLogstashTemplateRequest {
    public body?: DeleteTemplateReqNew;
    public constructor() { 
    }
    public withBody(body: DeleteTemplateReqNew): DeleteLogstashTemplateRequest {
        this['body'] = body;
        return this;
    }
}