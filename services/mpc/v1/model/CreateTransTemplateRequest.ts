import { TransTemplate } from './TransTemplate';


export class CreateTransTemplateRequest {
    public body?: TransTemplate;
    public constructor() { 
    }
    public withBody(body: TransTemplate): CreateTransTemplateRequest {
        this['body'] = body;
        return this;
    }
}