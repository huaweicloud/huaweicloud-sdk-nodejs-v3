import { UpdateNetworkInstance } from './UpdateNetworkInstance';


export class UpdateNetworkInstanceRequestBody {
    private 'network_instance'?: UpdateNetworkInstance;
    public constructor(networkInstance?: UpdateNetworkInstance) { 
        this['network_instance'] = networkInstance;
    }
    public withNetworkInstance(networkInstance: UpdateNetworkInstance): UpdateNetworkInstanceRequestBody {
        this['network_instance'] = networkInstance;
        return this;
    }
    public set networkInstance(networkInstance: UpdateNetworkInstance  | undefined) {
        this['network_instance'] = networkInstance;
    }
    public get networkInstance(): UpdateNetworkInstance | undefined {
        return this['network_instance'];
    }
}