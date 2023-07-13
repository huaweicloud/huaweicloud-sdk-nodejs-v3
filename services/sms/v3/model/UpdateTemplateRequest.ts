import { UpdateTemplateReq } from './UpdateTemplateReq';


export class UpdateTemplateRequest {
    public id: string;
    public body?: UpdateTemplateReq;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateTemplateRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateTemplateReq): UpdateTemplateRequest {
        this['body'] = body;
        return this;
    }
}