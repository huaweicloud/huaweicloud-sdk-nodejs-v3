import { CustomPolicy } from './CustomPolicy';
import { LinksSelf } from './LinksSelf';


export class ShowPolicyRoleResult {
    private 'domain_id'?: string;
    public references?: number;
    private 'updated_time'?: string;
    private 'created_time'?: string;
    private 'description_cn'?: string;
    public catalog?: string;
    public name?: string;
    public description?: string;
    public links?: LinksSelf;
    public id?: string;
    private 'display_name'?: string;
    public type?: string;
    public policy?: CustomPolicy;
    public constructor(domainId?: string, catalog?: string, name?: string, description?: string, links?: LinksSelf, id?: string, displayName?: string, type?: string, policy?: CustomPolicy) { 
        this['domain_id'] = domainId;
        this['catalog'] = catalog;
        this['name'] = name;
        this['description'] = description;
        this['links'] = links;
        this['id'] = id;
        this['display_name'] = displayName;
        this['type'] = type;
        this['policy'] = policy;
    }
    public withDomainId(domainId: string): ShowPolicyRoleResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withReferences(references: number): ShowPolicyRoleResult {
        this['references'] = references;
        return this;
    }
    public withUpdatedTime(updatedTime: string): ShowPolicyRoleResult {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withCreatedTime(createdTime: string): ShowPolicyRoleResult {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withDescriptionCn(descriptionCn: string): ShowPolicyRoleResult {
        this['description_cn'] = descriptionCn;
        return this;
    }
    public set descriptionCn(descriptionCn: string  | undefined) {
        this['description_cn'] = descriptionCn;
    }
    public get descriptionCn(): string | undefined {
        return this['description_cn'];
    }
    public withCatalog(catalog: string): ShowPolicyRoleResult {
        this['catalog'] = catalog;
        return this;
    }
    public withName(name: string): ShowPolicyRoleResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowPolicyRoleResult {
        this['description'] = description;
        return this;
    }
    public withLinks(links: LinksSelf): ShowPolicyRoleResult {
        this['links'] = links;
        return this;
    }
    public withId(id: string): ShowPolicyRoleResult {
        this['id'] = id;
        return this;
    }
    public withDisplayName(displayName: string): ShowPolicyRoleResult {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withType(type: string): ShowPolicyRoleResult {
        this['type'] = type;
        return this;
    }
    public withPolicy(policy: CustomPolicy): ShowPolicyRoleResult {
        this['policy'] = policy;
        return this;
    }
}