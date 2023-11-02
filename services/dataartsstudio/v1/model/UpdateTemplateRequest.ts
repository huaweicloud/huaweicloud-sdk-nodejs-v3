import { TemplateRO } from './TemplateRO';


export class UpdateTemplateRequest {
    public id?: string;
    public workspace?: string;
    public body?: TemplateRO;
    public constructor(id?: string, workspace?: string) { 
        this['id'] = id;
        this['workspace'] = workspace;
    }
    public withId(id: string): UpdateTemplateRequest {
        this['id'] = id;
        return this;
    }
    public withWorkspace(workspace: string): UpdateTemplateRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: TemplateRO): UpdateTemplateRequest {
        this['body'] = body;
        return this;
    }
}