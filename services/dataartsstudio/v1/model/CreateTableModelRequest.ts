import { TableModelVO } from './TableModelVO';


export class CreateTableModelRequest {
    public workspace?: string;
    public body?: TableModelVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateTableModelRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: TableModelVO): CreateTableModelRequest {
        this['body'] = body;
        return this;
    }
}