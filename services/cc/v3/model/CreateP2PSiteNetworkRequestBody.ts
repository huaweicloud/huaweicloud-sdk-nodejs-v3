import { CreateP2PSiteNetwork } from './CreateP2PSiteNetwork';


export class CreateP2PSiteNetworkRequestBody {
    private 'p2p_site_network'?: CreateP2PSiteNetwork;
    public constructor(p2pSiteNetwork?: CreateP2PSiteNetwork) { 
        this['p2p_site_network'] = p2pSiteNetwork;
    }
    public withP2pSiteNetwork(p2pSiteNetwork: CreateP2PSiteNetwork): CreateP2PSiteNetworkRequestBody {
        this['p2p_site_network'] = p2pSiteNetwork;
        return this;
    }
    public set p2pSiteNetwork(p2pSiteNetwork: CreateP2PSiteNetwork  | undefined) {
        this['p2p_site_network'] = p2pSiteNetwork;
    }
    public get p2pSiteNetwork(): CreateP2PSiteNetwork | undefined {
        return this['p2p_site_network'];
    }
}