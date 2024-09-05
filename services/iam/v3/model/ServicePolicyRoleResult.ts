import { LinksSelf } from './LinksSelf';
import { ServicePolicy } from './ServicePolicy';


export class ServicePolicyRoleResult {
    public catalog?: string;
    private 'display_name'?: string;
    public description?: string;
    public links?: LinksSelf;
    public policy?: ServicePolicy;
    private 'description_cn'?: string;
    private 'domain_id'?: string;
    public type?: string;
    public id?: string;
    public name?: string;
    private 'updated_time'?: string;
    private 'created_time'?: string;
    public constructor(catalog?: string, displayName?: string, description?: string, links?: LinksSelf, policy?: ServicePolicy, domainId?: string, type?: string, id?: string, name?: string) { 
        this['catalog'] = catalog;
        this['display_name'] = displayName;
        this['description'] = description;
        this['links'] = links;
        this['policy'] = policy;
        this['domain_id'] = domainId;
        this['type'] = type;
        this['id'] = id;
        this['name'] = name;
    }
    public withCatalog(catalog: string): ServicePolicyRoleResult {
        this['catalog'] = catalog;
        return this;
    }
    public withDisplayName(displayName: string): ServicePolicyRoleResult {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withDescription(description: string): ServicePolicyRoleResult {
        this['description'] = description;
        return this;
    }
    public withLinks(links: LinksSelf): ServicePolicyRoleResult {
        this['links'] = links;
        return this;
    }
    public withPolicy(policy: ServicePolicy): ServicePolicyRoleResult {
        this['policy'] = policy;
        return this;
    }
    public withDescriptionCn(descriptionCn: string): ServicePolicyRoleResult {
        this['description_cn'] = descriptionCn;
        return this;
    }
    public set descriptionCn(descriptionCn: string  | undefined) {
        this['description_cn'] = descriptionCn;
    }
    public get descriptionCn(): string | undefined {
        return this['description_cn'];
    }
    public withDomainId(domainId: string): ServicePolicyRoleResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withType(type: string): ServicePolicyRoleResult {
        this['type'] = type;
        return this;
    }
    public withId(id: string): ServicePolicyRoleResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServicePolicyRoleResult {
        this['name'] = name;
        return this;
    }
    public withUpdatedTime(updatedTime: string): ServicePolicyRoleResult {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withCreatedTime(createdTime: string): ServicePolicyRoleResult {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
}