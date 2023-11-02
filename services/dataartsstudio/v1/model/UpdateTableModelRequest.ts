import { TableModelUpdateVO } from './TableModelUpdateVO';


export class UpdateTableModelRequest {
    public workspace?: string;
    public body?: TableModelUpdateVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): UpdateTableModelRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: TableModelUpdateVO): UpdateTableModelRequest {
        this['body'] = body;
        return this;
    }
}