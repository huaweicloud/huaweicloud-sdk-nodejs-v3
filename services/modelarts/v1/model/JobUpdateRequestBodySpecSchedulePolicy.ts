

export class JobUpdateRequestBodySpecSchedulePolicy {
    public priority?: number;
    public preemptible?: boolean;
    public constructor() { 
    }
    public withPriority(priority: number): JobUpdateRequestBodySpecSchedulePolicy {
        this['priority'] = priority;
        return this;
    }
    public withPreemptible(preemptible: boolean): JobUpdateRequestBodySpecSchedulePolicy {
        this['preemptible'] = preemptible;
        return this;
    }
}