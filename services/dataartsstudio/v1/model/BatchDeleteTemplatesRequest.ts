import { TemplateListRO } from './TemplateListRO';


export class BatchDeleteTemplatesRequest {
    public workspace?: string;
    public body?: TemplateListRO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): BatchDeleteTemplatesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: TemplateListRO): BatchDeleteTemplatesRequest {
        this['body'] = body;
        return this;
    }
}