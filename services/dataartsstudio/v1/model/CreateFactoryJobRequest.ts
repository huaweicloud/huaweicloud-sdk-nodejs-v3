import { JobInfoRequest } from './JobInfoRequest';


export class CreateFactoryJobRequest {
    public workspace?: string;
    public body?: JobInfoRequest;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateFactoryJobRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: JobInfoRequest): CreateFactoryJobRequest {
        this['body'] = body;
        return this;
    }
}