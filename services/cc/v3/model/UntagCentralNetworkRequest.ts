import { UntagCentralNetworkRequestBody } from './UntagCentralNetworkRequestBody';


export class UntagCentralNetworkRequest {
    private 'central_network_id'?: string;
    public body?: UntagCentralNetworkRequestBody;
    public constructor(centralNetworkId?: string) { 
        this['central_network_id'] = centralNetworkId;
    }
    public withCentralNetworkId(centralNetworkId: string): UntagCentralNetworkRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withBody(body: UntagCentralNetworkRequestBody): UntagCentralNetworkRequest {
        this['body'] = body;
        return this;
    }
}