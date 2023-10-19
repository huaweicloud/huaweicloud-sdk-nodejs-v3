import { TagCentralNetworkRequestBody } from './TagCentralNetworkRequestBody';


export class TagCentralNetworkRequest {
    private 'central_network_id'?: string;
    public body?: TagCentralNetworkRequestBody;
    public constructor(centralNetworkId?: string) { 
        this['central_network_id'] = centralNetworkId;
    }
    public withCentralNetworkId(centralNetworkId: string): TagCentralNetworkRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withBody(body: TagCentralNetworkRequestBody): TagCentralNetworkRequest {
        this['body'] = body;
        return this;
    }
}