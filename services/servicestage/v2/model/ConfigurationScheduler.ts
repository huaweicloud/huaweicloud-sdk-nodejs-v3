import { SchedulerAffinity } from './SchedulerAffinity';


export class ConfigurationScheduler {
    public affinity?: SchedulerAffinity;
    private 'anti-affinity'?: SchedulerAffinity;
    public constructor() { 
    }
    public withAffinity(affinity: SchedulerAffinity): ConfigurationScheduler {
        this['affinity'] = affinity;
        return this;
    }
    public withAntiAffinity(antiAffinity: SchedulerAffinity): ConfigurationScheduler {
        this['anti-affinity'] = antiAffinity;
        return this;
    }
    public set antiAffinity(antiAffinity: SchedulerAffinity  | undefined) {
        this['anti-affinity'] = antiAffinity;
    }
    public get antiAffinity(): SchedulerAffinity | undefined {
        return this['anti-affinity'];
    }
}