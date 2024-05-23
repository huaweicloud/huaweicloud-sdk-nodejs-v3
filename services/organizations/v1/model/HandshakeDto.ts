import { TargetDto } from './TargetDto';


export class HandshakeDto {
    public id?: string;
    public urn?: string;
    private 'updated_at'?: Date;
    private 'created_at'?: Date;
    private 'management_account_id'?: string;
    private 'management_account_name'?: string;
    private 'organization_id'?: string;
    public notes?: string;
    public target?: TargetDto;
    public status?: string;
    public constructor(id?: string, urn?: string, updatedAt?: Date, createdAt?: Date, managementAccountId?: string, managementAccountName?: string, organizationId?: string, notes?: string, target?: TargetDto, status?: string) { 
        this['id'] = id;
        this['urn'] = urn;
        this['updated_at'] = updatedAt;
        this['created_at'] = createdAt;
        this['management_account_id'] = managementAccountId;
        this['management_account_name'] = managementAccountName;
        this['organization_id'] = organizationId;
        this['notes'] = notes;
        this['target'] = target;
        this['status'] = status;
    }
    public withId(id: string): HandshakeDto {
        this['id'] = id;
        return this;
    }
    public withUrn(urn: string): HandshakeDto {
        this['urn'] = urn;
        return this;
    }
    public withUpdatedAt(updatedAt: Date): HandshakeDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withCreatedAt(createdAt: Date): HandshakeDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withManagementAccountId(managementAccountId: string): HandshakeDto {
        this['management_account_id'] = managementAccountId;
        return this;
    }
    public set managementAccountId(managementAccountId: string  | undefined) {
        this['management_account_id'] = managementAccountId;
    }
    public get managementAccountId(): string | undefined {
        return this['management_account_id'];
    }
    public withManagementAccountName(managementAccountName: string): HandshakeDto {
        this['management_account_name'] = managementAccountName;
        return this;
    }
    public set managementAccountName(managementAccountName: string  | undefined) {
        this['management_account_name'] = managementAccountName;
    }
    public get managementAccountName(): string | undefined {
        return this['management_account_name'];
    }
    public withOrganizationId(organizationId: string): HandshakeDto {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withNotes(notes: string): HandshakeDto {
        this['notes'] = notes;
        return this;
    }
    public withTarget(target: TargetDto): HandshakeDto {
        this['target'] = target;
        return this;
    }
    public withStatus(status: string): HandshakeDto {
        this['status'] = status;
        return this;
    }
}