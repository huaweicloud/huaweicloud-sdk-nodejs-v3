import { LtsLogConfigResult } from './LtsLogConfigResult';


export class InstanceLtsLogConfigResult {
    public instance?: object;
    private 'lts_configs'?: Array<LtsLogConfigResult>;
    public constructor() { 
    }
    public withInstance(instance: object): InstanceLtsLogConfigResult {
        this['instance'] = instance;
        return this;
    }
    public withLtsConfigs(ltsConfigs: Array<LtsLogConfigResult>): InstanceLtsLogConfigResult {
        this['lts_configs'] = ltsConfigs;
        return this;
    }
    public set ltsConfigs(ltsConfigs: Array<LtsLogConfigResult>  | undefined) {
        this['lts_configs'] = ltsConfigs;
    }
    public get ltsConfigs(): Array<LtsLogConfigResult> | undefined {
        return this['lts_configs'];
    }
}