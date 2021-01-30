import { LinksSelf } from './LinksSelf';
import { ServicePolicy } from './ServicePolicy';


export class PolicyRoleResult {
    private 'domain_id': string | undefined;
    public references?: number;
    private 'updated_time'?: string | undefined;
    private 'created_time'?: string | undefined;
    private 'description_cn'?: string | undefined;
    public catalog: string;
    public name: string;
    public description: string;
    public links: LinksSelf;
    public id: string;
    private 'display_name': string | undefined;
    public type: string;
    public policy: ServicePolicy;
    public constructor(domainId: any, catalog: any, name: any, description: any, links: any, id: any, displayName: any, type: any, policy: any) { 
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
    public withDomainId(domainId: string): PolicyRoleResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withReferences(references: number): PolicyRoleResult {
        this['references'] = references;
        return this;
    }
    public withUpdatedTime(updatedTime: string): PolicyRoleResult {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime() {
        return this['updated_time'];
    }
    public withCreatedTime(createdTime: string): PolicyRoleResult {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
    public withDescriptionCn(descriptionCn: string): PolicyRoleResult {
        this['description_cn'] = descriptionCn;
        return this;
    }
    public set descriptionCn(descriptionCn: string | undefined) {
        this['description_cn'] = descriptionCn;
    }
    public get descriptionCn() {
        return this['description_cn'];
    }
    public withCatalog(catalog: string): PolicyRoleResult {
        this['catalog'] = catalog;
        return this;
    }
    public withName(name: string): PolicyRoleResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PolicyRoleResult {
        this['description'] = description;
        return this;
    }
    public withLinks(links: LinksSelf): PolicyRoleResult {
        this['links'] = links;
        return this;
    }
    public withId(id: string): PolicyRoleResult {
        this['id'] = id;
        return this;
    }
    public withDisplayName(displayName: string): PolicyRoleResult {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName() {
        return this['display_name'];
    }
    public withType(type: string): PolicyRoleResult {
        this['type'] = type;
        return this;
    }
    public withPolicy(policy: ServicePolicy): PolicyRoleResult {
        this['policy'] = policy;
        return this;
    }
}