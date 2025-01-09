import { AccessConfigReq } from './AccessConfigReq';
import { NetworkConfigReq } from './NetworkConfigReq';


export class SiteConfigsRequest {
    private 'availability_zone'?: string;
    private 'network_config'?: NetworkConfigReq;
    private 'access_config'?: AccessConfigReq;
    public constructor(networkConfig?: NetworkConfigReq, accessConfig?: AccessConfigReq) { 
        this['network_config'] = networkConfig;
        this['access_config'] = accessConfig;
    }
    public withAvailabilityZone(availabilityZone: string): SiteConfigsRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withNetworkConfig(networkConfig: NetworkConfigReq): SiteConfigsRequest {
        this['network_config'] = networkConfig;
        return this;
    }
    public set networkConfig(networkConfig: NetworkConfigReq  | undefined) {
        this['network_config'] = networkConfig;
    }
    public get networkConfig(): NetworkConfigReq | undefined {
        return this['network_config'];
    }
    public withAccessConfig(accessConfig: AccessConfigReq): SiteConfigsRequest {
        this['access_config'] = accessConfig;
        return this;
    }
    public set accessConfig(accessConfig: AccessConfigReq  | undefined) {
        this['access_config'] = accessConfig;
    }
    public get accessConfig(): AccessConfigReq | undefined {
        return this['access_config'];
    }
}