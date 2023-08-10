import { CreateAlarmTemplateRequestBody } from './CreateAlarmTemplateRequestBody';


export class CreateAlarmTemplateRequest {
    public body?: CreateAlarmTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAlarmTemplateRequestBody): CreateAlarmTemplateRequest {
        this['body'] = body;
        return this;
    }
}