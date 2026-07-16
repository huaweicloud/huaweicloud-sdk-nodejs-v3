import { PreferredAffinity } from './PreferredAffinity';
import { RequiredAffinity } from './RequiredAffinity';


export class SchedulePolicy {
    private 'required_affinity'?: RequiredAffinity;
    private 'preferred_affinity'?: PreferredAffinity;
    public priority?: number;
    public preemptible?: boolean;
    public constructor() { 
    }
    public withRequiredAffinity(requiredAffinity: RequiredAffinity): SchedulePolicy {
        this['required_affinity'] = requiredAffinity;
        return this;
    }
    public set requiredAffinity(requiredAffinity: RequiredAffinity  | undefined) {
        this['required_affinity'] = requiredAffinity;
    }
    public get requiredAffinity(): RequiredAffinity | undefined {
        return this['required_affinity'];
    }
    public withPreferredAffinity(preferredAffinity: PreferredAffinity): SchedulePolicy {
        this['preferred_affinity'] = preferredAffinity;
        return this;
    }
    public set preferredAffinity(preferredAffinity: PreferredAffinity  | undefined) {
        this['preferred_affinity'] = preferredAffinity;
    }
    public get preferredAffinity(): PreferredAffinity | undefined {
        return this['preferred_affinity'];
    }
    public withPriority(priority: number): SchedulePolicy {
        this['priority'] = priority;
        return this;
    }
    public withPreemptible(preemptible: boolean): SchedulePolicy {
        this['preemptible'] = preemptible;
        return this;
    }
}