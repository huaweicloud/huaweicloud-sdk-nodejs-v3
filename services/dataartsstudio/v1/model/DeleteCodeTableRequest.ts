import { IdsParam } from './IdsParam';


export class DeleteCodeTableRequest {
    public workspace?: string;
    public body?: IdsParam;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): DeleteCodeTableRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: IdsParam): DeleteCodeTableRequest {
        this['body'] = body;
        return this;
    }
}