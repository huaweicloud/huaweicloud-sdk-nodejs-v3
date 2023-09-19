import { CreateNetworkInstance } from './CreateNetworkInstance';


export class CreateNetworkInstanceRequestBody {
    private 'network_instance'?: CreateNetworkInstance;
    public constructor(networkInstance?: CreateNetworkInstance) { 
        this['network_instance'] = networkInstance;
    }
    public withNetworkInstance(networkInstance: CreateNetworkInstance): CreateNetworkInstanceRequestBody {
        this['network_instance'] = networkInstance;
        return this;
    }
    public set networkInstance(networkInstance: CreateNetworkInstance  | undefined) {
        this['network_instance'] = networkInstance;
    }
    public get networkInstance(): CreateNetworkInstance | undefined {
        return this['network_instance'];
    }
}