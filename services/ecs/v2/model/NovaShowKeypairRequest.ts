

export class NovaShowKeypairRequest {
    private 'keypair_name': string | undefined;
    private 'OpenStack-API-Version'?: string | undefined;
    public constructor(keypairName?: any) { 
        this['keypair_name'] = keypairName;
    }
    public withKeypairName(keypairName: string): NovaShowKeypairRequest {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName() {
        return this['keypair_name'];
    }
    public withOpenStackAPIVersion(openStackAPIVersion: string): NovaShowKeypairRequest {
        this['OpenStack-API-Version'] = openStackAPIVersion;
        return this;
    }
    public set openStackAPIVersion(openStackAPIVersion: string | undefined) {
        this['OpenStack-API-Version'] = openStackAPIVersion;
    }
    public get openStackAPIVersion() {
        return this['OpenStack-API-Version'];
    }
}