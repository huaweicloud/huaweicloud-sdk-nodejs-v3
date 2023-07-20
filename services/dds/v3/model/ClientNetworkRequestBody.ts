

export class ClientNetworkRequestBody {
    private 'client_network_ranges'?: Array<string>;
    public constructor(clientNetworkRanges?: Array<string>) { 
        this['client_network_ranges'] = clientNetworkRanges;
    }
    public withClientNetworkRanges(clientNetworkRanges: Array<string>): ClientNetworkRequestBody {
        this['client_network_ranges'] = clientNetworkRanges;
        return this;
    }
    public set clientNetworkRanges(clientNetworkRanges: Array<string>  | undefined) {
        this['client_network_ranges'] = clientNetworkRanges;
    }
    public get clientNetworkRanges(): Array<string> | undefined {
        return this['client_network_ranges'];
    }
}