import { DeleteTemplateReq } from './DeleteTemplateReq';


export class DeleteTemplateRequest {
    public body?: DeleteTemplateReq;
    public constructor() { 
    }
    public withBody(body: DeleteTemplateReq): DeleteTemplateRequest {
        this['body'] = body;
        return this;
    }
}