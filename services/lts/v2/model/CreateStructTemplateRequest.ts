import { LtsStructTemplateInfo } from './LtsStructTemplateInfo';


export class CreateStructTemplateRequest {
    public body?: LtsStructTemplateInfo;
    public constructor() { 
    }
    public withBody(body: LtsStructTemplateInfo): CreateStructTemplateRequest {
        this['body'] = body;
        return this;
    }
}