

export class BulkSecurityLevel {
    public guids?: Array<string>;
    private 'security_level'?: string;
    public constructor(guids?: Array<string>, securityLevel?: string) { 
        this['guids'] = guids;
        this['security_level'] = securityLevel;
    }
    public withGuids(guids: Array<string>): BulkSecurityLevel {
        this['guids'] = guids;
        return this;
    }
    public withSecurityLevel(securityLevel: string): BulkSecurityLevel {
        this['security_level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: string  | undefined) {
        this['security_level'] = securityLevel;
    }
    public get securityLevel(): string | undefined {
        return this['security_level'];
    }
}