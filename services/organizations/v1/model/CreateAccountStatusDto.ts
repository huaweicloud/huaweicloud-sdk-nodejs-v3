

export class CreateAccountStatusDto {
    private 'account_id'?: string;
    private 'account_name'?: string;
    private 'completed_at'?: Date;
    private 'created_at'?: Date;
    public id?: string;
    public state?: string;
    private 'failure_reason'?: string;
    public constructor(accountId?: string, accountName?: string, completedAt?: Date, createdAt?: Date, id?: string, state?: string) { 
        this['account_id'] = accountId;
        this['account_name'] = accountName;
        this['completed_at'] = completedAt;
        this['created_at'] = createdAt;
        this['id'] = id;
        this['state'] = state;
    }
    public withAccountId(accountId: string): CreateAccountStatusDto {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccountName(accountName: string): CreateAccountStatusDto {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withCompletedAt(completedAt: Date): CreateAccountStatusDto {
        this['completed_at'] = completedAt;
        return this;
    }
    public set completedAt(completedAt: Date  | undefined) {
        this['completed_at'] = completedAt;
    }
    public get completedAt(): Date | undefined {
        return this['completed_at'];
    }
    public withCreatedAt(createdAt: Date): CreateAccountStatusDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withId(id: string): CreateAccountStatusDto {
        this['id'] = id;
        return this;
    }
    public withState(state: string): CreateAccountStatusDto {
        this['state'] = state;
        return this;
    }
    public withFailureReason(failureReason: string): CreateAccountStatusDto {
        this['failure_reason'] = failureReason;
        return this;
    }
    public set failureReason(failureReason: string  | undefined) {
        this['failure_reason'] = failureReason;
    }
    public get failureReason(): string | undefined {
        return this['failure_reason'];
    }
}