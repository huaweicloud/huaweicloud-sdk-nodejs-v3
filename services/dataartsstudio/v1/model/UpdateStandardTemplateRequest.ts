import { StandElementFieldVO } from './StandElementFieldVO';


export class UpdateStandardTemplateRequest {
    public workspace?: string;
    public body?: StandElementFieldVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): UpdateStandardTemplateRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: StandElementFieldVO): UpdateStandardTemplateRequest {
        this['body'] = body;
        return this;
    }
}