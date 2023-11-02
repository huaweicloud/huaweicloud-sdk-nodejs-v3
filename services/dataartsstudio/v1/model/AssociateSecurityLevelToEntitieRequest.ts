

export class AssociateSecurityLevelToEntitieRequest {
    public workspace?: string;
    public guid?: string;
    private 'security-level'?: string;
    public constructor(workspace?: string, guid?: string, securityLevel?: string) { 
        this['workspace'] = workspace;
        this['guid'] = guid;
        this['security-level'] = securityLevel;
    }
    public withWorkspace(workspace: string): AssociateSecurityLevelToEntitieRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withGuid(guid: string): AssociateSecurityLevelToEntitieRequest {
        this['guid'] = guid;
        return this;
    }
    public withSecurityLevel(securityLevel: string): AssociateSecurityLevelToEntitieRequest {
        this['security-level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: string  | undefined) {
        this['security-level'] = securityLevel;
    }
    public get securityLevel(): string | undefined {
        return this['security-level'];
    }
}