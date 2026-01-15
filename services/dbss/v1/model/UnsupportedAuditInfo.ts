

export class UnsupportedAuditInfo {
    private 'audit_version'?: string;
    private 'server_name'?: string;
    public constructor() { 
    }
    public withAuditVersion(auditVersion: string): UnsupportedAuditInfo {
        this['audit_version'] = auditVersion;
        return this;
    }
    public set auditVersion(auditVersion: string  | undefined) {
        this['audit_version'] = auditVersion;
    }
    public get auditVersion(): string | undefined {
        return this['audit_version'];
    }
    public withServerName(serverName: string): UnsupportedAuditInfo {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
}