import { VpcConfig } from './VpcConfig';


export class NetworkControlConfig {
    private 'disable_public_network'?: boolean | undefined;
    private 'trigger_access_vpcs'?: Array<VpcConfig> | undefined;
    public constructor() { 
    }
    public withDisablePublicNetwork(disablePublicNetwork: boolean): NetworkControlConfig {
        this['disable_public_network'] = disablePublicNetwork;
        return this;
    }
    public set disablePublicNetwork(disablePublicNetwork: boolean | undefined) {
        this['disable_public_network'] = disablePublicNetwork;
    }
    public get disablePublicNetwork() {
        return this['disable_public_network'];
    }
    public withTriggerAccessVpcs(triggerAccessVpcs: Array<VpcConfig>): NetworkControlConfig {
        this['trigger_access_vpcs'] = triggerAccessVpcs;
        return this;
    }
    public set triggerAccessVpcs(triggerAccessVpcs: Array<VpcConfig> | undefined) {
        this['trigger_access_vpcs'] = triggerAccessVpcs;
    }
    public get triggerAccessVpcs() {
        return this['trigger_access_vpcs'];
    }
}