import { NeutronUpdateNetworkOption } from './NeutronUpdateNetworkOption';


export class NeutronUpdateNetworkRequestBody {
    public network: NeutronUpdateNetworkOption;
    public constructor(network?: any) { 
        this['network'] = network;
    }
    public withNetwork(network: NeutronUpdateNetworkOption): NeutronUpdateNetworkRequestBody {
        this['network'] = network;
        return this;
    }
}