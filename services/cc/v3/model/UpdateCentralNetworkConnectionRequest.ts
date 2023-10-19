import { UpdateCentralNetworkConnectionRequestBody } from './UpdateCentralNetworkConnectionRequestBody';


export class UpdateCentralNetworkConnectionRequest {
    private 'central_network_id'?: string;
    private 'connection_id'?: string;
    public body?: UpdateCentralNetworkConnectionRequestBody;
    public constructor(centralNetworkId?: string, connectionId?: string) { 
        this['central_network_id'] = centralNetworkId;
        this['connection_id'] = connectionId;
    }
    public withCentralNetworkId(centralNetworkId: string): UpdateCentralNetworkConnectionRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withConnectionId(connectionId: string): UpdateCentralNetworkConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: UpdateCentralNetworkConnectionRequestBody): UpdateCentralNetworkConnectionRequest {
        this['body'] = body;
        return this;
    }
}