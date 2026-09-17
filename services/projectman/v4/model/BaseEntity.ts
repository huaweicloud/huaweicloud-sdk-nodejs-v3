

export class BaseEntity {
    private 'tenant_id'?: string;
    private 'modified_by'?: string;
    private 'modified_date'?: string;
    private 'created_by'?: string;
    private 'created_date'?: string;
    public constructor() { 
    }
    public withTenantId(tenantId: string): BaseEntity {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withModifiedBy(modifiedBy: string): BaseEntity {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withModifiedDate(modifiedDate: string): BaseEntity {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withCreatedBy(createdBy: string): BaseEntity {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedDate(createdDate: string): BaseEntity {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
}