import { OpenEntitySearchRequest } from './OpenEntitySearchRequest';


export class ShowEntitiesRequest {
    public workspace?: string;
    public body?: OpenEntitySearchRequest;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowEntitiesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: OpenEntitySearchRequest): ShowEntitiesRequest {
        this['body'] = body;
        return this;
    }
}