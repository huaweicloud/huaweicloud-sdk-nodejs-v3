import { InstanceLtsBasicInfo } from './InstanceLtsBasicInfo';
import { LtsConfig } from './LtsConfig';


export class LtsConfigsV3 {
    private 'lts_configs'?: Array<LtsConfig>;
    public instance?: InstanceLtsBasicInfo;
    public constructor() { 
    }
    public withLtsConfigs(ltsConfigs: Array<LtsConfig>): LtsConfigsV3 {
        this['lts_configs'] = ltsConfigs;
        return this;
    }
    public set ltsConfigs(ltsConfigs: Array<LtsConfig>  | undefined) {
        this['lts_configs'] = ltsConfigs;
    }
    public get ltsConfigs(): Array<LtsConfig> | undefined {
        return this['lts_configs'];
    }
    public withInstance(instance: InstanceLtsBasicInfo): LtsConfigsV3 {
        this['instance'] = instance;
        return this;
    }
}