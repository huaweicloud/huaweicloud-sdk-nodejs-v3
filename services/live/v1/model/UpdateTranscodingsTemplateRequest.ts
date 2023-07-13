import { StreamTranscodingTemplate } from './StreamTranscodingTemplate';


export class UpdateTranscodingsTemplateRequest {
    public body?: StreamTranscodingTemplate;
    public constructor() { 
    }
    public withBody(body: StreamTranscodingTemplate): UpdateTranscodingsTemplateRequest {
        this['body'] = body;
        return this;
    }
}