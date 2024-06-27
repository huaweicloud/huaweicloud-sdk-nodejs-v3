import { ChInstanceLtsConfigsInstance } from './ChInstanceLtsConfigsInstance';
import { ChLtsConfigs } from './ChLtsConfigs';


export class ChInstanceLtsConfigs {
    private 'lts_configs'?: Array<ChLtsConfigs>;
    public instance?: ChInstanceLtsConfigsInstance;
    public constructor() { 
    }
    public withLtsConfigs(ltsConfigs: Array<ChLtsConfigs>): ChInstanceLtsConfigs {
        this['lts_configs'] = ltsConfigs;
        return this;
    }
    public set ltsConfigs(ltsConfigs: Array<ChLtsConfigs>  | undefined) {
        this['lts_configs'] = ltsConfigs;
    }
    public get ltsConfigs(): Array<ChLtsConfigs> | undefined {
        return this['lts_configs'];
    }
    public withInstance(instance: ChInstanceLtsConfigsInstance): ChInstanceLtsConfigs {
        this['instance'] = instance;
        return this;
    }
}