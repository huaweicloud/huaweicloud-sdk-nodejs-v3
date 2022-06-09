

export class SystemSecurityPolicy {
    public name: string;
    public protocols: Array<string>;
    public ciphers: Array<string>;
    private 'project_id': string | undefined;
    public constructor(name?: any, protocols?: any, ciphers?: any, projectId?: any) { 
        this['name'] = name;
        this['protocols'] = protocols;
        this['ciphers'] = ciphers;
        this['project_id'] = projectId;
    }
    public withName(name: string): SystemSecurityPolicy {
        this['name'] = name;
        return this;
    }
    public withProtocols(protocols: Array<string>): SystemSecurityPolicy {
        this['protocols'] = protocols;
        return this;
    }
    public withCiphers(ciphers: Array<string>): SystemSecurityPolicy {
        this['ciphers'] = ciphers;
        return this;
    }
    public withProjectId(projectId: string): SystemSecurityPolicy {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
}