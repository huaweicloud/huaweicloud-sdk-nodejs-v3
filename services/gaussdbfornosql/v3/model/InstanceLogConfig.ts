import { InstanceLogConfigDetail } from './InstanceLogConfigDetail';
import { LogInstanceInfo } from './LogInstanceInfo';


export class InstanceLogConfig {
    public instance?: LogInstanceInfo;
    private 'lts_configs'?: Array<InstanceLogConfigDetail>;
    public constructor(instance?: LogInstanceInfo, ltsConfigs?: Array<InstanceLogConfigDetail>) { 
        this['instance'] = instance;
        this['lts_configs'] = ltsConfigs;
    }
    public withInstance(instance: LogInstanceInfo): InstanceLogConfig {
        this['instance'] = instance;
        return this;
    }
    public withLtsConfigs(ltsConfigs: Array<InstanceLogConfigDetail>): InstanceLogConfig {
        this['lts_configs'] = ltsConfigs;
        return this;
    }
    public set ltsConfigs(ltsConfigs: Array<InstanceLogConfigDetail>  | undefined) {
        this['lts_configs'] = ltsConfigs;
    }
    public get ltsConfigs(): Array<InstanceLogConfigDetail> | undefined {
        return this['lts_configs'];
    }
}