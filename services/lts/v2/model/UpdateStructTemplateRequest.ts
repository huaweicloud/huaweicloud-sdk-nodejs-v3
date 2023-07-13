import { LtsStructTemplateInfo } from './LtsStructTemplateInfo';


export class UpdateStructTemplateRequest {
    public body?: LtsStructTemplateInfo;
    public constructor() { 
    }
    public withBody(body: LtsStructTemplateInfo): UpdateStructTemplateRequest {
        this['body'] = body;
        return this;
    }
}