import { AgencyPolicy } from './AgencyPolicy';
import { LinksSelf } from './LinksSelf';


export class AgencyPolicyRoleResult {
    public catalog: string;
    private 'display_name': string | undefined;
    public description: string;
    public links: LinksSelf;
    public policy: AgencyPolicy;
    private 'description_cn'?: string | undefined;
    private 'domain_id': string | undefined;
    public type: string;
    public id: string;
    public name: string;
    private 'updated_time'?: string | undefined;
    private 'created_time'?: string | undefined;
    public references?: string;
    public constructor(catalog: any, displayName: any, description: any, links: any, policy: any, domainId: any, type: any, id: any, name: any) { 
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
    public set displayName(displayName: string | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName() {
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
    public set descriptionCn(descriptionCn: string | undefined) {
        this['description_cn'] = descriptionCn;
    }
    public get descriptionCn() {
        return this['description_cn'];
    }
    public withDomainId(domainId: string): AgencyPolicyRoleResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
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
    public set updatedTime(updatedTime: string | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime() {
        return this['updated_time'];
    }
    public withCreatedTime(createdTime: string): AgencyPolicyRoleResult {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
    public withReferences(references: string): AgencyPolicyRoleResult {
        this['references'] = references;
        return this;
    }
}