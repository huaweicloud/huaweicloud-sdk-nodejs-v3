

export class RedistributionConf {
    private 'parallel_jobs'?: number;
    private 'priority_policy'?: string;
    public constructor(parallelJobs?: number, priorityPolicy?: string) { 
        this['parallel_jobs'] = parallelJobs;
        this['priority_policy'] = priorityPolicy;
    }
    public withParallelJobs(parallelJobs: number): RedistributionConf {
        this['parallel_jobs'] = parallelJobs;
        return this;
    }
    public set parallelJobs(parallelJobs: number  | undefined) {
        this['parallel_jobs'] = parallelJobs;
    }
    public get parallelJobs(): number | undefined {
        return this['parallel_jobs'];
    }
    public withPriorityPolicy(priorityPolicy: string): RedistributionConf {
        this['priority_policy'] = priorityPolicy;
        return this;
    }
    public set priorityPolicy(priorityPolicy: string  | undefined) {
        this['priority_policy'] = priorityPolicy;
    }
    public get priorityPolicy(): string | undefined {
        return this['priority_policy'];
    }
}