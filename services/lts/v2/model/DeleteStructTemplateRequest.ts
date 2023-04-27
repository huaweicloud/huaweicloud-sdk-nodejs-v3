import { DeleteStructTemplateReqBody } from './DeleteStructTemplateReqBody';


export class DeleteStructTemplateRequest {
    public body?: DeleteStructTemplateReqBody;
    public constructor() { 
    }
    public withBody(body: DeleteStructTemplateReqBody): DeleteStructTemplateRequest {
        this['body'] = body;
        return this;
    }
}