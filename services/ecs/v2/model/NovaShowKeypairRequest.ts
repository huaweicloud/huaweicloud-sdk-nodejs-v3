

export class NovaShowKeypairRequest {
    private 'keypair_name'?: string;
    private 'OpenStack-API-Version'?: string;
    public constructor(keypairName?: string) { 
        this['keypair_name'] = keypairName;
    }
    public withKeypairName(keypairName: string): NovaShowKeypairRequest {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string  | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName(): string | undefined {
        return this['keypair_name'];
    }
    public withOpenStackAPIVersion(openStackAPIVersion: string): NovaShowKeypairRequest {
        this['OpenStack-API-Version'] = openStackAPIVersion;
        return this;
    }
    public set openStackAPIVersion(openStackAPIVersion: string  | undefined) {
        this['OpenStack-API-Version'] = openStackAPIVersion;
    }
    public get openStackAPIVersion(): string | undefined {
        return this['OpenStack-API-Version'];
    }
}