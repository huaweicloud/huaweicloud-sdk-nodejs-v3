import { BaseEntity } from './BaseEntity';


export class BaseCategory {
    private 'tenant_id'?: string;
    private 'modified_by'?: string;
    private 'modified_date'?: string;
    private 'created_by'?: string;
    private 'created_date'?: string;
    public code?: string;
    public prefix?: string;
    private 'domain_id'?: BaseCategoryDomainIdEnum | string;
    public icon?: string;
    public color?: string;
    public description?: string;
    private 'definition_type'?: number;
    private 'type_id'?: string;
    public constructor() { 
    }
    public withTenantId(tenantId: string): BaseCategory {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withModifiedBy(modifiedBy: string): BaseCategory {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withModifiedDate(modifiedDate: string): BaseCategory {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withCreatedBy(createdBy: string): BaseCategory {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedDate(createdDate: string): BaseCategory {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withCode(code: string): BaseCategory {
        this['code'] = code;
        return this;
    }
    public withPrefix(prefix: string): BaseCategory {
        this['prefix'] = prefix;
        return this;
    }
    public withDomainId(domainId: BaseCategoryDomainIdEnum | string): BaseCategory {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: BaseCategoryDomainIdEnum | string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): BaseCategoryDomainIdEnum | string | undefined {
        return this['domain_id'];
    }
    public withIcon(icon: string): BaseCategory {
        this['icon'] = icon;
        return this;
    }
    public withColor(color: string): BaseCategory {
        this['color'] = color;
        return this;
    }
    public withDescription(description: string): BaseCategory {
        this['description'] = description;
        return this;
    }
    public withDefinitionType(definitionType: number): BaseCategory {
        this['definition_type'] = definitionType;
        return this;
    }
    public set definitionType(definitionType: number  | undefined) {
        this['definition_type'] = definitionType;
    }
    public get definitionType(): number | undefined {
        return this['definition_type'];
    }
    public withTypeId(typeId: string): BaseCategory {
        this['type_id'] = typeId;
        return this;
    }
    public set typeId(typeId: string  | undefined) {
        this['type_id'] = typeId;
    }
    public get typeId(): string | undefined {
        return this['type_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BaseCategoryDomainIdEnum {
    E_1 = '-1',
    E_0 = '0'
}
