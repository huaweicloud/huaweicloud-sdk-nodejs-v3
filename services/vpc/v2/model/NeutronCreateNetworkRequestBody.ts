import { NeutronCreateNetworkOption } from './NeutronCreateNetworkOption';


export class NeutronCreateNetworkRequestBody {
    public network?: NeutronCreateNetworkOption;
    public constructor(network?: NeutronCreateNetworkOption) { 
        this['network'] = network;
    }
    public withNetwork(network: NeutronCreateNetworkOption): NeutronCreateNetworkRequestBody {
        this['network'] = network;
        return this;
    }
}