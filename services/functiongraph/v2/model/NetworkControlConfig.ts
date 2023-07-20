import { VpcConfig } from './VpcConfig';


export class NetworkControlConfig {
    private 'disable_public_network'?: boolean;
    private 'trigger_access_vpcs'?: Array<VpcConfig>;
    public constructor() { 
    }
    public withDisablePublicNetwork(disablePublicNetwork: boolean): NetworkControlConfig {
        this['disable_public_network'] = disablePublicNetwork;
        return this;
    }
    public set disablePublicNetwork(disablePublicNetwork: boolean  | undefined) {
        this['disable_public_network'] = disablePublicNetwork;
    }
    public get disablePublicNetwork(): boolean | undefined {
        return this['disable_public_network'];
    }
    public withTriggerAccessVpcs(triggerAccessVpcs: Array<VpcConfig>): NetworkControlConfig {
        this['trigger_access_vpcs'] = triggerAccessVpcs;
        return this;
    }
    public set triggerAccessVpcs(triggerAccessVpcs: Array<VpcConfig>  | undefined) {
        this['trigger_access_vpcs'] = triggerAccessVpcs;
    }
    public get triggerAccessVpcs(): Array<VpcConfig> | undefined {
        return this['trigger_access_vpcs'];
    }
}