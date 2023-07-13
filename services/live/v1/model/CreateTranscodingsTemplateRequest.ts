import { StreamTranscodingTemplate } from './StreamTranscodingTemplate';


export class CreateTranscodingsTemplateRequest {
    public body?: StreamTranscodingTemplate;
    public constructor() { 
    }
    public withBody(body: StreamTranscodingTemplate): CreateTranscodingsTemplateRequest {
        this['body'] = body;
        return this;
    }
}