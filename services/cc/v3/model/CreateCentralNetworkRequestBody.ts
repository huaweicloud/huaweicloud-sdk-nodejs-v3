import { CreateCentralNetwork } from './CreateCentralNetwork';


export class CreateCentralNetworkRequestBody {
    private 'central_network'?: CreateCentralNetwork;
    public constructor(centralNetwork?: CreateCentralNetwork) { 
        this['central_network'] = centralNetwork;
    }
    public withCentralNetwork(centralNetwork: CreateCentralNetwork): CreateCentralNetworkRequestBody {
        this['central_network'] = centralNetwork;
        return this;
    }
    public set centralNetwork(centralNetwork: CreateCentralNetwork  | undefined) {
        this['central_network'] = centralNetwork;
    }
    public get centralNetwork(): CreateCentralNetwork | undefined {
        return this['central_network'];
    }
}