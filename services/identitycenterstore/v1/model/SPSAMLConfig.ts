

export class SPSAMLConfig {
    private 'acs_url'?: string;
    public issuer?: string;
    public metadata?: string;
    public constructor(acsUrl?: string, issuer?: string, metadata?: string) { 
        this['acs_url'] = acsUrl;
        this['issuer'] = issuer;
        this['metadata'] = metadata;
    }
    public withAcsUrl(acsUrl: string): SPSAMLConfig {
        this['acs_url'] = acsUrl;
        return this;
    }
    public set acsUrl(acsUrl: string  | undefined) {
        this['acs_url'] = acsUrl;
    }
    public get acsUrl(): string | undefined {
        return this['acs_url'];
    }
    public withIssuer(issuer: string): SPSAMLConfig {
        this['issuer'] = issuer;
        return this;
    }
    public withMetadata(metadata: string): SPSAMLConfig {
        this['metadata'] = metadata;
        return this;
    }
}