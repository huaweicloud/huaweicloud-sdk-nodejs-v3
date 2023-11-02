import { QueryTaskRequest } from './QueryTaskRequest';


export class ShowTaskListRequest {
    public workspace?: string;
    public body?: QueryTaskRequest;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowTaskListRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: QueryTaskRequest): ShowTaskListRequest {
        this['body'] = body;
        return this;
    }
}