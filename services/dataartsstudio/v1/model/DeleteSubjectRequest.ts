import { IdsParam } from './IdsParam';


export class DeleteSubjectRequest {
    public workspace?: string;
    public body?: IdsParam;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): DeleteSubjectRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: IdsParam): DeleteSubjectRequest {
        this['body'] = body;
        return this;
    }
}