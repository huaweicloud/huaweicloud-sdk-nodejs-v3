import { UpdateCentralNetworkConnection } from './UpdateCentralNetworkConnection';


export class UpdateCentralNetworkConnectionRequestBody {
    private 'central_network_connection'?: UpdateCentralNetworkConnection;
    public constructor(centralNetworkConnection?: UpdateCentralNetworkConnection) { 
        this['central_network_connection'] = centralNetworkConnection;
    }
    public withCentralNetworkConnection(centralNetworkConnection: UpdateCentralNetworkConnection): UpdateCentralNetworkConnectionRequestBody {
        this['central_network_connection'] = centralNetworkConnection;
        return this;
    }
    public set centralNetworkConnection(centralNetworkConnection: UpdateCentralNetworkConnection  | undefined) {
        this['central_network_connection'] = centralNetworkConnection;
    }
    public get centralNetworkConnection(): UpdateCentralNetworkConnection | undefined {
        return this['central_network_connection'];
    }
}