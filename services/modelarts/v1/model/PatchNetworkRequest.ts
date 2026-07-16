import { NetworkUpdateRequest } from './NetworkUpdateRequest';


export class PatchNetworkRequest {
    private 'network_name'?: string;
    public body?: NetworkUpdateRequest;
    public constructor(networkName?: string) { 
        this['network_name'] = networkName;
    }
    public withNetworkName(networkName: string): PatchNetworkRequest {
        this['network_name'] = networkName;
        return this;
    }
    public set networkName(networkName: string  | undefined) {
        this['network_name'] = networkName;
    }
    public get networkName(): string | undefined {
        return this['network_name'];
    }
    public withBody(body: NetworkUpdateRequest): PatchNetworkRequest {
        this['body'] = body;
        return this;
    }
}