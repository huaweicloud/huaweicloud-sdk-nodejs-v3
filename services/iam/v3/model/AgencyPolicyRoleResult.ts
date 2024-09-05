import { AgencyPolicy } from './AgencyPolicy';
import { LinksSelf } from './LinksSelf';


export class AgencyPolicyRoleResult {
    public catalog?: string;
    private 'display_name'?: string;
    public description?: string;
    public links?: LinksSelf;
    public policy?: AgencyPolicy;
    private 'description_cn'?: string;
    private 'domain_id'?: string;
    public type?: string;
    public id?: string;
    public name?: string;
    private 'updated_time'?: string;
    private 'created_time'?: string;
    public constructor(catalog?: string, displayName?: string, description?: string, links?: LinksSelf, policy?: AgencyPolicy, domainId?: string, type?: string, id?: string, name?: string) { 
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
    public withCatalog(catalog: string): AgencyPolicyRoleResult {
        this['catalog'] = catalog;
        return this;
    }
    public withDisplayName(displayName: string): AgencyPolicyRoleResult {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withDescription(description: string): AgencyPolicyRoleResult {
        this['description'] = description;
        return this;
    }
    public withLinks(links: LinksSelf): AgencyPolicyRoleResult {
        this['links'] = links;
        return this;
    }
    public withPolicy(policy: AgencyPolicy): AgencyPolicyRoleResult {
        this['policy'] = policy;
        return this;
    }
    public withDescriptionCn(descriptionCn: string): AgencyPolicyRoleResult {
        this['description_cn'] = descriptionCn;
        return this;
    }
    public set descriptionCn(descriptionCn: string  | undefined) {
        this['description_cn'] = descriptionCn;
    }
    public get descriptionCn(): string | undefined {
        return this['description_cn'];
    }
    public withDomainId(domainId: string): AgencyPolicyRoleResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withType(type: string): AgencyPolicyRoleResult {
        this['type'] = type;
        return this;
    }
    public withId(id: string): AgencyPolicyRoleResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AgencyPolicyRoleResult {
        this['name'] = name;
        return this;
    }
    public withUpdatedTime(updatedTime: string): AgencyPolicyRoleResult {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withCreatedTime(createdTime: string): AgencyPolicyRoleResult {
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