import { UpdateCentralNetwork } from './UpdateCentralNetwork';


export class UpdateCentralNetworkRequestBody {
    private 'central_network'?: UpdateCentralNetwork;
    public constructor(centralNetwork?: UpdateCentralNetwork) { 
        this['central_network'] = centralNetwork;
    }
    public withCentralNetwork(centralNetwork: UpdateCentralNetwork): UpdateCentralNetworkRequestBody {
        this['central_network'] = centralNetwork;
        return this;
    }
    public set centralNetwork(centralNetwork: UpdateCentralNetwork  | undefined) {
        this['central_network'] = centralNetwork;
    }
    public get centralNetwork(): UpdateCentralNetwork | undefined {
        return this['central_network'];
    }
}