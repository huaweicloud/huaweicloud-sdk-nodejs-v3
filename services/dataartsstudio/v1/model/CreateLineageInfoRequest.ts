import { LineageInfoRequest } from './LineageInfoRequest';


export class CreateLineageInfoRequest {
    public workspace?: string;
    public body?: LineageInfoRequest;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateLineageInfoRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: LineageInfoRequest): CreateLineageInfoRequest {
        this['body'] = body;
        return this;
    }
}