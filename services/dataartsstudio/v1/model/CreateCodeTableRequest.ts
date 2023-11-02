import { CodeTableVO } from './CodeTableVO';


export class CreateCodeTableRequest {
    public workspace?: string;
    public body?: CodeTableVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateCodeTableRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: CodeTableVO): CreateCodeTableRequest {
        this['body'] = body;
        return this;
    }
}