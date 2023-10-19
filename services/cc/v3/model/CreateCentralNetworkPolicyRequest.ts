import { CreateCentralNetworkPolicyRequestBody } from './CreateCentralNetworkPolicyRequestBody';


export class CreateCentralNetworkPolicyRequest {
    private 'central_network_id'?: string;
    public body?: CreateCentralNetworkPolicyRequestBody;
    public constructor(centralNetworkId?: string) { 
        this['central_network_id'] = centralNetworkId;
    }
    public withCentralNetworkId(centralNetworkId: string): CreateCentralNetworkPolicyRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withBody(body: CreateCentralNetworkPolicyRequestBody): CreateCentralNetworkPolicyRequest {
        this['body'] = body;
        return this;
    }
}