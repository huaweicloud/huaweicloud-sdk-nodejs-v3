import { BulkSecurityLevel } from './BulkSecurityLevel';


export class BatchAssociateSecurityLevelToEntitiesRequest {
    public workspace?: string;
    public body?: BulkSecurityLevel;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): BatchAssociateSecurityLevelToEntitiesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BulkSecurityLevel): BatchAssociateSecurityLevelToEntitiesRequest {
        this['body'] = body;
        return this;
    }
}