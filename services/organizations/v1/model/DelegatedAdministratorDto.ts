

export class DelegatedAdministratorDto {
    private 'delegation_enabled_at'?: Date;
    private 'account_id'?: string;
    private 'account_urn'?: string;
    private 'join_method'?: string;
    private 'joined_at'?: Date;
    private 'account_name'?: string;
    public constructor(delegationEnabledAt?: Date, accountId?: string, accountUrn?: string, joinMethod?: string, joinedAt?: Date, accountName?: string) { 
        this['delegation_enabled_at'] = delegationEnabledAt;
        this['account_id'] = accountId;
        this['account_urn'] = accountUrn;
        this['join_method'] = joinMethod;
        this['joined_at'] = joinedAt;
        this['account_name'] = accountName;
    }
    public withDelegationEnabledAt(delegationEnabledAt: Date): DelegatedAdministratorDto {
        this['delegation_enabled_at'] = delegationEnabledAt;
        return this;
    }
    public set delegationEnabledAt(delegationEnabledAt: Date  | undefined) {
        this['delegation_enabled_at'] = delegationEnabledAt;
    }
    public get delegationEnabledAt(): Date | undefined {
        return this['delegation_enabled_at'];
    }
    public withAccountId(accountId: string): DelegatedAdministratorDto {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccountUrn(accountUrn: string): DelegatedAdministratorDto {
        this['account_urn'] = accountUrn;
        return this;
    }
    public set accountUrn(accountUrn: string  | undefined) {
        this['account_urn'] = accountUrn;
    }
    public get accountUrn(): string | undefined {
        return this['account_urn'];
    }
    public withJoinMethod(joinMethod: string): DelegatedAdministratorDto {
        this['join_method'] = joinMethod;
        return this;
    }
    public set joinMethod(joinMethod: string  | undefined) {
        this['join_method'] = joinMethod;
    }
    public get joinMethod(): string | undefined {
        return this['join_method'];
    }
    public withJoinedAt(joinedAt: Date): DelegatedAdministratorDto {
        this['joined_at'] = joinedAt;
        return this;
    }
    public set joinedAt(joinedAt: Date  | undefined) {
        this['joined_at'] = joinedAt;
    }
    public get joinedAt(): Date | undefined {
        return this['joined_at'];
    }
    public withAccountName(accountName: string): DelegatedAdministratorDto {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
}