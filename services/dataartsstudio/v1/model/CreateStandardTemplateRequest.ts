import { StandElementFieldVO } from './StandElementFieldVO';


export class CreateStandardTemplateRequest {
    public workspace?: string;
    public body?: StandElementFieldVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateStandardTemplateRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: StandElementFieldVO): CreateStandardTemplateRequest {
        this['body'] = body;
        return this;
    }
}