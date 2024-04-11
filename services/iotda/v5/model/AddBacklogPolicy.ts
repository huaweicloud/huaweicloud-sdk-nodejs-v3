

export class AddBacklogPolicy {
    private 'policy_name'?: string;
    public description?: string;
    private 'backlog_size'?: number;
    private 'backlog_time'?: number;
    public constructor() { 
    }
    public withPolicyName(policyName: string): AddBacklogPolicy {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withDescription(description: string): AddBacklogPolicy {
        this['description'] = description;
        return this;
    }
    public withBacklogSize(backlogSize: number): AddBacklogPolicy {
        this['backlog_size'] = backlogSize;
        return this;
    }
    public set backlogSize(backlogSize: number  | undefined) {
        this['backlog_size'] = backlogSize;
    }
    public get backlogSize(): number | undefined {
        return this['backlog_size'];
    }
    public withBacklogTime(backlogTime: number): AddBacklogPolicy {
        this['backlog_time'] = backlogTime;
        return this;
    }
    public set backlogTime(backlogTime: number  | undefined) {
        this['backlog_time'] = backlogTime;
    }
    public get backlogTime(): number | undefined {
        return this['backlog_time'];
    }
}