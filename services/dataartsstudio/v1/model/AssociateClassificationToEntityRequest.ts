import { OpenClassification } from './OpenClassification';


export class AssociateClassificationToEntityRequest {
    public workspace?: string;
    public guid?: string;
    public body?: OpenClassification;
    public constructor(workspace?: string, guid?: string) { 
        this['workspace'] = workspace;
        this['guid'] = guid;
    }
    public withWorkspace(workspace: string): AssociateClassificationToEntityRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withGuid(guid: string): AssociateClassificationToEntityRequest {
        this['guid'] = guid;
        return this;
    }
    public withBody(body: OpenClassification): AssociateClassificationToEntityRequest {
        this['body'] = body;
        return this;
    }
}