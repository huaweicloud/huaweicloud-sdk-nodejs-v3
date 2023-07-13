import { ModifyTransTemplateReq } from './ModifyTransTemplateReq';


export class UpdateTransTemplateRequest {
    public body?: ModifyTransTemplateReq;
    public constructor() { 
    }
    public withBody(body: ModifyTransTemplateReq): UpdateTransTemplateRequest {
        this['body'] = body;
        return this;
    }
}