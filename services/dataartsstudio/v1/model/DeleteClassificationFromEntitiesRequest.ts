import { OpenClassification } from './OpenClassification';


export class DeleteClassificationFromEntitiesRequest {
    public workspace?: string;
    public guid?: string;
    public body?: OpenClassification;
    public constructor(workspace?: string, guid?: string) { 
        this['workspace'] = workspace;
        this['guid'] = guid;
    }
    public withWorkspace(workspace: string): DeleteClassificationFromEntitiesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withGuid(guid: string): DeleteClassificationFromEntitiesRequest {
        this['guid'] = guid;
        return this;
    }
    public withBody(body: OpenClassification): DeleteClassificationFromEntitiesRequest {
        this['body'] = body;
        return this;
    }
}