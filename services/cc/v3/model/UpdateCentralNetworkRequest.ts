import { UpdateCentralNetworkRequestBody } from './UpdateCentralNetworkRequestBody';


export class UpdateCentralNetworkRequest {
    private 'central_network_id'?: string;
    public body?: UpdateCentralNetworkRequestBody;
    public constructor(centralNetworkId?: string) { 
        this['central_network_id'] = centralNetworkId;
    }
    public withCentralNetworkId(centralNetworkId: string): UpdateCentralNetworkRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withBody(body: UpdateCentralNetworkRequestBody): UpdateCentralNetworkRequest {
        this['body'] = body;
        return this;
    }
}