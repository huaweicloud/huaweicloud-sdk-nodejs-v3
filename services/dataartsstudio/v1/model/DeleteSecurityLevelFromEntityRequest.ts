

export class DeleteSecurityLevelFromEntityRequest {
    public workspace?: string;
    public guid?: string;
    public constructor(workspace?: string, guid?: string) { 
        this['workspace'] = workspace;
        this['guid'] = guid;
    }
    public withWorkspace(workspace: string): DeleteSecurityLevelFromEntityRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withGuid(guid: string): DeleteSecurityLevelFromEntityRequest {
        this['guid'] = guid;
        return this;
    }
}