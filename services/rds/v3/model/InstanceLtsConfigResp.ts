import { InstanceLtsBasicInfoResp } from './InstanceLtsBasicInfoResp';
import { InstanceLtsConfigDetailResp } from './InstanceLtsConfigDetailResp';


export class InstanceLtsConfigResp {
    private 'lts_configs'?: Array<InstanceLtsConfigDetailResp>;
    public instance?: InstanceLtsBasicInfoResp;
    public constructor() { 
    }
    public withLtsConfigs(ltsConfigs: Array<InstanceLtsConfigDetailResp>): InstanceLtsConfigResp {
        this['lts_configs'] = ltsConfigs;
        return this;
    }
    public set ltsConfigs(ltsConfigs: Array<InstanceLtsConfigDetailResp>  | undefined) {
        this['lts_configs'] = ltsConfigs;
    }
    public get ltsConfigs(): Array<InstanceLtsConfigDetailResp> | undefined {
        return this['lts_configs'];
    }
    public withInstance(instance: InstanceLtsBasicInfoResp): InstanceLtsConfigResp {
        this['instance'] = instance;
        return this;
    }
}