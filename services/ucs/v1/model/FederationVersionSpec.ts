

export class FederationVersionSpec {
    private 'FederationVersion'?: string;
    public constructor() { 
    }
    public withFederationVersion(federationVersion: string): FederationVersionSpec {
        this['FederationVersion'] = federationVersion;
        return this;
    }
    public set federationVersion(federationVersion: string  | undefined) {
        this['FederationVersion'] = federationVersion;
    }
    public get federationVersion(): string | undefined {
        return this['FederationVersion'];
    }
}