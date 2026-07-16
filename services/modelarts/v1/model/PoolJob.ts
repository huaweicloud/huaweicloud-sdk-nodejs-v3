

export class PoolJob {
    public startTimestamp?: number;
    public endTimestamp?: number;
    public jobId?: string;
    public jobName?: string;
    public involvedObjects?: string;
    public inputs?: string;
    public phase?: string;
    public suspend?: boolean;
    public type?: string;
    public conditions?: string;
    public message?: string;
    public constructor() { 
    }
    public withStartTimestamp(startTimestamp: number): PoolJob {
        this['startTimestamp'] = startTimestamp;
        return this;
    }
    public withEndTimestamp(endTimestamp: number): PoolJob {
        this['endTimestamp'] = endTimestamp;
        return this;
    }
    public withJobId(jobId: string): PoolJob {
        this['jobId'] = jobId;
        return this;
    }
    public withJobName(jobName: string): PoolJob {
        this['jobName'] = jobName;
        return this;
    }
    public withInvolvedObjects(involvedObjects: string): PoolJob {
        this['involvedObjects'] = involvedObjects;
        return this;
    }
    public withInputs(inputs: string): PoolJob {
        this['inputs'] = inputs;
        return this;
    }
    public withPhase(phase: string): PoolJob {
        this['phase'] = phase;
        return this;
    }
    public withSuspend(suspend: boolean): PoolJob {
        this['suspend'] = suspend;
        return this;
    }
    public withType(type: string): PoolJob {
        this['type'] = type;
        return this;
    }
    public withConditions(conditions: string): PoolJob {
        this['conditions'] = conditions;
        return this;
    }
    public withMessage(message: string): PoolJob {
        this['message'] = message;
        return this;
    }
}