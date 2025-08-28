import { CreateLaunchTemplateRequestBody } from './CreateLaunchTemplateRequestBody';


export class CreateLaunchTemplateRequest {
    public body?: CreateLaunchTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateLaunchTemplateRequestBody): CreateLaunchTemplateRequest {
        this['body'] = body;
        return this;
    }
}