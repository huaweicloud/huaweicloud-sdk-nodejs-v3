

export class DeleteNetworkRequest {
    private 'network_name'?: string;
    public constructor(networkName?: string) { 
        this['network_name'] = networkName;
    }
    public withNetworkName(networkName: string): DeleteNetworkRequest {
        this['network_name'] = networkName;
        return this;
    }
    public set networkName(networkName: string  | undefined) {
        this['network_name'] = networkName;
    }
    public get networkName(): string | undefined {
        return this['network_name'];
    }
}