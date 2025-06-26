

export class Execution {
    public id?: number;
    private 'policy_id'?: number;
    public status?: string;
    private 'status_text'?: string;
    public total?: number;
    public failed?: number;
    public succeed?: number;
    private 'in_progress'?: number;
    public stopped?: number;
    public trigger?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor(id?: number, policyId?: number, status?: string, statusText?: string, total?: number, failed?: number, succeed?: number, inProgress?: number, stopped?: number, trigger?: string, createdAt?: string, updatedAt?: string) { 
        this['id'] = id;
        this['policy_id'] = policyId;
        this['status'] = status;
        this['status_text'] = statusText;
        this['total'] = total;
        this['failed'] = failed;
        this['succeed'] = succeed;
        this['in_progress'] = inProgress;
        this['stopped'] = stopped;
        this['trigger'] = trigger;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: number): Execution {
        this['id'] = id;
        return this;
    }
    public withPolicyId(policyId: number): Execution {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: number  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): number | undefined {
        return this['policy_id'];
    }
    public withStatus(status: string): Execution {
        this['status'] = status;
        return this;
    }
    public withStatusText(statusText: string): Execution {
        this['status_text'] = statusText;
        return this;
    }
    public set statusText(statusText: string  | undefined) {
        this['status_text'] = statusText;
    }
    public get statusText(): string | undefined {
        return this['status_text'];
    }
    public withTotal(total: number): Execution {
        this['total'] = total;
        return this;
    }
    public withFailed(failed: number): Execution {
        this['failed'] = failed;
        return this;
    }
    public withSucceed(succeed: number): Execution {
        this['succeed'] = succeed;
        return this;
    }
    public withInProgress(inProgress: number): Execution {
        this['in_progress'] = inProgress;
        return this;
    }
    public set inProgress(inProgress: number  | undefined) {
        this['in_progress'] = inProgress;
    }
    public get inProgress(): number | undefined {
        return this['in_progress'];
    }
    public withStopped(stopped: number): Execution {
        this['stopped'] = stopped;
        return this;
    }
    public withTrigger(trigger: string): Execution {
        this['trigger'] = trigger;
        return this;
    }
    public withCreatedAt(createdAt: string): Execution {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): Execution {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}