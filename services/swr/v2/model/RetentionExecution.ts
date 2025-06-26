

export class RetentionExecution {
    public id?: number;
    private 'policy_id'?: number;
    private 'dry_run'?: boolean;
    public status?: string;
    public trigger?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(id?: number, policyId?: number, dryRun?: boolean, status?: string, trigger?: string, startTime?: string, endTime?: string) { 
        this['id'] = id;
        this['policy_id'] = policyId;
        this['dry_run'] = dryRun;
        this['status'] = status;
        this['trigger'] = trigger;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withId(id: number): RetentionExecution {
        this['id'] = id;
        return this;
    }
    public withPolicyId(policyId: number): RetentionExecution {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: number  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): number | undefined {
        return this['policy_id'];
    }
    public withDryRun(dryRun: boolean): RetentionExecution {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withStatus(status: string): RetentionExecution {
        this['status'] = status;
        return this;
    }
    public withTrigger(trigger: string): RetentionExecution {
        this['trigger'] = trigger;
        return this;
    }
    public withStartTime(startTime: string): RetentionExecution {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): RetentionExecution {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}