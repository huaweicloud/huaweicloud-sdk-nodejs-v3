

export class OrganizationDto {
    public id?: string;
    public urn?: string;
    private 'management_account_id'?: string;
    private 'management_account_name'?: string;
    private 'created_at'?: Date;
    public constructor(id?: string, urn?: string, managementAccountId?: string, managementAccountName?: string, createdAt?: Date) { 
        this['id'] = id;
        this['urn'] = urn;
        this['management_account_id'] = managementAccountId;
        this['management_account_name'] = managementAccountName;
        this['created_at'] = createdAt;
    }
    public withId(id: string): OrganizationDto {
        this['id'] = id;
        return this;
    }
    public withUrn(urn: string): OrganizationDto {
        this['urn'] = urn;
        return this;
    }
    public withManagementAccountId(managementAccountId: string): OrganizationDto {
        this['management_account_id'] = managementAccountId;
        return this;
    }
    public set managementAccountId(managementAccountId: string  | undefined) {
        this['management_account_id'] = managementAccountId;
    }
    public get managementAccountId(): string | undefined {
        return this['management_account_id'];
    }
    public withManagementAccountName(managementAccountName: string): OrganizationDto {
        this['management_account_name'] = managementAccountName;
        return this;
    }
    public set managementAccountName(managementAccountName: string  | undefined) {
        this['management_account_name'] = managementAccountName;
    }
    public get managementAccountName(): string | undefined {
        return this['management_account_name'];
    }
    public withCreatedAt(createdAt: Date): OrganizationDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}