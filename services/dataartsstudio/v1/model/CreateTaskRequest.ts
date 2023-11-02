import { MetadataCollectionTask } from './MetadataCollectionTask';


export class CreateTaskRequest {
    public workspace?: string;
    public body?: MetadataCollectionTask;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateTaskRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: MetadataCollectionTask): CreateTaskRequest {
        this['body'] = body;
        return this;
    }
}