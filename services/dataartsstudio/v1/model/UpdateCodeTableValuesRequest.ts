import { CodeTableFieldValueUpdateVO } from './CodeTableFieldValueUpdateVO';


export class UpdateCodeTableValuesRequest {
    public workspace?: string;
    public id?: string;
    public body?: CodeTableFieldValueUpdateVO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateCodeTableValuesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): UpdateCodeTableValuesRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: CodeTableFieldValueUpdateVO): UpdateCodeTableValuesRequest {
        this['body'] = body;
        return this;
    }
}