import { RequiredAffinityResp } from './RequiredAffinityResp';


export class SchedulePolicyResp {
    private 'required_affinity'?: RequiredAffinityResp;
    public priority?: number;
    public preemptible?: boolean;
    public constructor() { 
    }
    public withRequiredAffinity(requiredAffinity: RequiredAffinityResp): SchedulePolicyResp {
        this['required_affinity'] = requiredAffinity;
        return this;
    }
    public set requiredAffinity(requiredAffinity: RequiredAffinityResp  | undefined) {
        this['required_affinity'] = requiredAffinity;
    }
    public get requiredAffinity(): RequiredAffinityResp | undefined {
        return this['required_affinity'];
    }
    public withPriority(priority: number): SchedulePolicyResp {
        this['priority'] = priority;
        return this;
    }
    public withPreemptible(preemptible: boolean): SchedulePolicyResp {
        this['preemptible'] = preemptible;
        return this;
    }
}