import { HtapLTSConfigResponseInstance } from './HtapLTSConfigResponseInstance';
import { HtapLTSConfigResponseLtsConfigs } from './HtapLTSConfigResponseLtsConfigs';


export class HtapLTSConfigResponseInstanceLtsConfigs {
    private 'lts_configs'?: Array<HtapLTSConfigResponseLtsConfigs>;
    public instance?: HtapLTSConfigResponseInstance;
    public constructor(ltsConfigs?: Array<HtapLTSConfigResponseLtsConfigs>, instance?: HtapLTSConfigResponseInstance) { 
        this['lts_configs'] = ltsConfigs;
        this['instance'] = instance;
    }
    public withLtsConfigs(ltsConfigs: Array<HtapLTSConfigResponseLtsConfigs>): HtapLTSConfigResponseInstanceLtsConfigs {
        this['lts_configs'] = ltsConfigs;
        return this;
    }
    public set ltsConfigs(ltsConfigs: Array<HtapLTSConfigResponseLtsConfigs>  | undefined) {
        this['lts_configs'] = ltsConfigs;
    }
    public get ltsConfigs(): Array<HtapLTSConfigResponseLtsConfigs> | undefined {
        return this['lts_configs'];
    }
    public withInstance(instance: HtapLTSConfigResponseInstance): HtapLTSConfigResponseInstanceLtsConfigs {
        this['instance'] = instance;
        return this;
    }
}