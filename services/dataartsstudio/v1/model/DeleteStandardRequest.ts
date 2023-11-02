import { IdsParam } from './IdsParam';


export class DeleteStandardRequest {
    public workspace?: string;
    public body?: IdsParam;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): DeleteStandardRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: IdsParam): DeleteStandardRequest {
        this['body'] = body;
        return this;
    }
}