import { TargetLoadbalancerParam } from './TargetLoadbalancerParam';


export class CloneLoadbalancerRequestBody {
    public count?: number;
    private 'target_loadbalancer_param'?: TargetLoadbalancerParam;
    public constructor(targetLoadbalancerParam?: TargetLoadbalancerParam) { 
        this['target_loadbalancer_param'] = targetLoadbalancerParam;
    }
    public withCount(count: number): CloneLoadbalancerRequestBody {
        this['count'] = count;
        return this;
    }
    public withTargetLoadbalancerParam(targetLoadbalancerParam: TargetLoadbalancerParam): CloneLoadbalancerRequestBody {
        this['target_loadbalancer_param'] = targetLoadbalancerParam;
        return this;
    }
    public set targetLoadbalancerParam(targetLoadbalancerParam: TargetLoadbalancerParam  | undefined) {
        this['target_loadbalancer_param'] = targetLoadbalancerParam;
    }
    public get targetLoadbalancerParam(): TargetLoadbalancerParam | undefined {
        return this['target_loadbalancer_param'];
    }
}