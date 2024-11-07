import { SiteNetworkTopologyEnum } from './SiteNetworkTopologyEnum';


export class SiteNetworkTopology {
    public topology?: SiteNetworkTopologyEnum;
    public constructor(topology?: SiteNetworkTopologyEnum) { 
        this['topology'] = topology;
    }
    public withTopology(topology: SiteNetworkTopologyEnum): SiteNetworkTopology {
        this['topology'] = topology;
        return this;
    }
}