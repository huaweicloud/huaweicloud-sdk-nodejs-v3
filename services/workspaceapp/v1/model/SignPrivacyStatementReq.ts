

export class SignPrivacyStatementReq {
    public version?: string;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): SignPrivacyStatementReq {
        this['version'] = version;
        return this;
    }
}