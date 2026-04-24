

export class DownloadSpMetadataRequest {
    private 'identity_provider'?: string;
    private 'access_server_address'?: string;
    public constructor(identityProvider?: string, accessServerAddress?: string) { 
        this['identity_provider'] = identityProvider;
        this['access_server_address'] = accessServerAddress;
    }
    public withIdentityProvider(identityProvider: string): DownloadSpMetadataRequest {
        this['identity_provider'] = identityProvider;
        return this;
    }
    public set identityProvider(identityProvider: string  | undefined) {
        this['identity_provider'] = identityProvider;
    }
    public get identityProvider(): string | undefined {
        return this['identity_provider'];
    }
    public withAccessServerAddress(accessServerAddress: string): DownloadSpMetadataRequest {
        this['access_server_address'] = accessServerAddress;
        return this;
    }
    public set accessServerAddress(accessServerAddress: string  | undefined) {
        this['access_server_address'] = accessServerAddress;
    }
    public get accessServerAddress(): string | undefined {
        return this['access_server_address'];
    }
}