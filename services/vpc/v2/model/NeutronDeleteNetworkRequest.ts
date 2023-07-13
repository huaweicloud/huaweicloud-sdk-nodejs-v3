

export class NeutronDeleteNetworkRequest {
    private 'network_id': string | undefined;
    public constructor(networkId?: any) { 
        this['network_id'] = networkId;
    }
    public withNetworkId(networkId: string): NeutronDeleteNetworkRequest {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId() {
        return this['network_id'];
    }
}