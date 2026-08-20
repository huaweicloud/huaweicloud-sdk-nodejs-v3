

export class CreateThirdPartyAssociateDTO {
    private 'tenant_id'?: string;
    public title?: string;
    public type?: string;
    private 'modified_date'?: string;
    private 'created_by'?: string;
    public url?: string;
    private 'domain_id'?: string;
    private 'workitem_id'?: string;
    private 'modified_by'?: string;
    private 'operation_id'?: string;
    public id?: string;
    private 'created_date'?: string;
    public state?: string;
    public category?: string;
    public region?: string;
    public constructor() { 
    }
    public withTenantId(tenantId: string): CreateThirdPartyAssociateDTO {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withTitle(title: string): CreateThirdPartyAssociateDTO {
        this['title'] = title;
        return this;
    }
    public withType(type: string): CreateThirdPartyAssociateDTO {
        this['type'] = type;
        return this;
    }
    public withModifiedDate(modifiedDate: string): CreateThirdPartyAssociateDTO {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withCreatedBy(createdBy: string): CreateThirdPartyAssociateDTO {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withUrl(url: string): CreateThirdPartyAssociateDTO {
        this['url'] = url;
        return this;
    }
    public withDomainId(domainId: string): CreateThirdPartyAssociateDTO {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withWorkitemId(workitemId: string): CreateThirdPartyAssociateDTO {
        this['workitem_id'] = workitemId;
        return this;
    }
    public set workitemId(workitemId: string  | undefined) {
        this['workitem_id'] = workitemId;
    }
    public get workitemId(): string | undefined {
        return this['workitem_id'];
    }
    public withModifiedBy(modifiedBy: string): CreateThirdPartyAssociateDTO {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withOperationId(operationId: string): CreateThirdPartyAssociateDTO {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
    }
    public withId(id: string): CreateThirdPartyAssociateDTO {
        this['id'] = id;
        return this;
    }
    public withCreatedDate(createdDate: string): CreateThirdPartyAssociateDTO {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withState(state: string): CreateThirdPartyAssociateDTO {
        this['state'] = state;
        return this;
    }
    public withCategory(category: string): CreateThirdPartyAssociateDTO {
        this['category'] = category;
        return this;
    }
    public withRegion(region: string): CreateThirdPartyAssociateDTO {
        this['region'] = region;
        return this;
    }
}