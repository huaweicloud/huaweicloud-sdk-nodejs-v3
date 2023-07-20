import { NeutronUpdateNetworkRequestBody } from './NeutronUpdateNetworkRequestBody';


export class NeutronUpdateNetworkRequest {
    private 'network_id'?: string;
    public body?: NeutronUpdateNetworkRequestBody;
    public constructor(networkId?: string) { 
        this['network_id'] = networkId;
    }
    public withNetworkId(networkId: string): NeutronUpdateNetworkRequest {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withBody(body: NeutronUpdateNetworkRequestBody): NeutronUpdateNetworkRequest {
        this['body'] = body;
        return this;
    }
}