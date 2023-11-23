import { ListLtsLogPolicyRespondBodyInstance } from './ListLtsLogPolicyRespondBodyInstance';
import { ListLtsLogPolicyRespondBodyLtsConfigs } from './ListLtsLogPolicyRespondBodyLtsConfigs';


export class ListLtsLogPolicyRespondBodyInstanceLtsConfigs {
    public instance?: ListLtsLogPolicyRespondBodyInstance;
    private 'lts_configs'?: Array<ListLtsLogPolicyRespondBodyLtsConfigs>;
    public constructor() { 
    }
    public withInstance(instance: ListLtsLogPolicyRespondBodyInstance): ListLtsLogPolicyRespondBodyInstanceLtsConfigs {
        this['instance'] = instance;
        return this;
    }
    public withLtsConfigs(ltsConfigs: Array<ListLtsLogPolicyRespondBodyLtsConfigs>): ListLtsLogPolicyRespondBodyInstanceLtsConfigs {
        this['lts_configs'] = ltsConfigs;
        return this;
    }
    public set ltsConfigs(ltsConfigs: Array<ListLtsLogPolicyRespondBodyLtsConfigs>  | undefined) {
        this['lts_configs'] = ltsConfigs;
    }
    public get ltsConfigs(): Array<ListLtsLogPolicyRespondBodyLtsConfigs> | undefined {
        return this['lts_configs'];
    }
}