import { UpdateSiteNetwork } from './UpdateSiteNetwork';


export class UpdateSiteNetworkRequestBody {
    private 'site_network'?: UpdateSiteNetwork;
    public constructor(siteNetwork?: UpdateSiteNetwork) { 
        this['site_network'] = siteNetwork;
    }
    public withSiteNetwork(siteNetwork: UpdateSiteNetwork): UpdateSiteNetworkRequestBody {
        this['site_network'] = siteNetwork;
        return this;
    }
    public set siteNetwork(siteNetwork: UpdateSiteNetwork  | undefined) {
        this['site_network'] = siteNetwork;
    }
    public get siteNetwork(): UpdateSiteNetwork | undefined {
        return this['site_network'];
    }
}