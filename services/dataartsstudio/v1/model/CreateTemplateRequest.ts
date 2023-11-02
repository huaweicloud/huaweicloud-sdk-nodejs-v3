import { TemplateRO } from './TemplateRO';


export class CreateTemplateRequest {
    public workspace?: string;
    public body?: TemplateRO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateTemplateRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: TemplateRO): CreateTemplateRequest {
        this['body'] = body;
        return this;
    }
}