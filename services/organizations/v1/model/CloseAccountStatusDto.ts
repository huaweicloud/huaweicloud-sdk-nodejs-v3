

export class CloseAccountStatusDto {
    private 'account_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'organization_id'?: string;
    public state?: string;
    private 'failure_reason'?: string;
    public constructor(accountId?: string, createdAt?: Date, updatedAt?: Date, organizationId?: string, state?: string) { 
        this['account_id'] = accountId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['organization_id'] = organizationId;
        this['state'] = state;
    }
    public withAccountId(accountId: string): CloseAccountStatusDto {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withCreatedAt(createdAt: Date): CloseAccountStatusDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): CloseAccountStatusDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withOrganizationId(organizationId: string): CloseAccountStatusDto {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withState(state: string): CloseAccountStatusDto {
        this['state'] = state;
        return this;
    }
    public withFailureReason(failureReason: string): CloseAccountStatusDto {
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