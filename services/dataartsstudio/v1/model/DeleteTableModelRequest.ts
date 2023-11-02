import { IdsParam } from './IdsParam';


export class DeleteTableModelRequest {
    public workspace?: string;
    public body?: IdsParam;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): DeleteTableModelRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: IdsParam): DeleteTableModelRequest {
        this['body'] = body;
        return this;
    }
}