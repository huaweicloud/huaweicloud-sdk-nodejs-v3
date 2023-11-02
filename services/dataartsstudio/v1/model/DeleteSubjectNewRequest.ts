import { IdsParam } from './IdsParam';


export class DeleteSubjectNewRequest {
    public workspace?: string;
    public body?: IdsParam;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): DeleteSubjectNewRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: IdsParam): DeleteSubjectNewRequest {
        this['body'] = body;
        return this;
    }
}