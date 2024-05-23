import { NetworkInfoCreate } from './NetworkInfoCreate';


export class SwitchVirtualPrivateCloudRequestBody {
    private 'server_id'?: string;
    public network?: NetworkInfoCreate;
    public constructor(serverId?: string, network?: NetworkInfoCreate) { 
        this['server_id'] = serverId;
        this['network'] = network;
    }
    public withServerId(serverId: string): SwitchVirtualPrivateCloudRequestBody {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withNetwork(network: NetworkInfoCreate): SwitchVirtualPrivateCloudRequestBody {
        this['network'] = network;
        return this;
    }
}