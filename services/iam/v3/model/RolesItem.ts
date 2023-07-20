import { RolePolicy } from './RolePolicy';


export class RolesItem {
    public catalog?: string;
    private 'display_name'?: string;
    public description?: string;
    private 'description_cn'?: string;
    private 'domain_id'?: string;
    public flag?: string;
    public id?: string;
    public name?: string;
    public policy?: RolePolicy;
    public type?: string;
    public constructor(catalog?: string, displayName?: string, description?: string, descriptionCn?: string, domainId?: string, flag?: string, id?: string, name?: string, policy?: RolePolicy, type?: string) { 
        this['catalog'] = catalog;
        this['display_name'] = displayName;
        this['description'] = description;
        this['description_cn'] = descriptionCn;
        this['domain_id'] = domainId;
        this['flag'] = flag;
        this['id'] = id;
        this['name'] = name;
        this['policy'] = policy;
        this['type'] = type;
    }
    public withCatalog(catalog: string): RolesItem {
        this['catalog'] = catalog;
        return this;
    }
    public withDisplayName(displayName: string): RolesItem {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withDescription(description: string): RolesItem {
        this['description'] = description;
        return this;
    }
    public withDescriptionCn(descriptionCn: string): RolesItem {
        this['description_cn'] = descriptionCn;
        return this;
    }
    public set descriptionCn(descriptionCn: string  | undefined) {
        this['description_cn'] = descriptionCn;
    }
    public get descriptionCn(): string | undefined {
        return this['description_cn'];
    }
    public withDomainId(domainId: string): RolesItem {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withFlag(flag: string): RolesItem {
        this['flag'] = flag;
        return this;
    }
    public withId(id: string): RolesItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RolesItem {
        this['name'] = name;
        return this;
    }
    public withPolicy(policy: RolePolicy): RolesItem {
        this['policy'] = policy;
        return this;
    }
    public withType(type: string): RolesItem {
        this['type'] = type;
        return this;
    }
}