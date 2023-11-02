import { CodeTableVO } from './CodeTableVO';


export class UpdateCodeTableRequest {
    public workspace?: string;
    public id?: string;
    public body?: CodeTableVO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateCodeTableRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): UpdateCodeTableRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: CodeTableVO): UpdateCodeTableRequest {
        this['body'] = body;
        return this;
    }
}