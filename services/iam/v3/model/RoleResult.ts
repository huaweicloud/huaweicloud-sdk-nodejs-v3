import { Links } from './Links';
import { RolePolicy } from './RolePolicy';


export class RoleResult {
    private 'domain_id'?: string | undefined;
    public flag?: string;
    private 'description_cn'?: string | undefined;
    public catalog?: string;
    public name: string;
    public description?: string;
    public links?: Links;
    public id: string;
    private 'display_name'?: string | undefined;
    public type: string;
    public policy: RolePolicy;
    private 'updated_time'?: string | undefined;
    private 'created_time'?: string | undefined;
    public constructor(name: any, id: any, type: any, policy: any) { 
        this['name'] = name;
        this['id'] = id;
        this['type'] = type;
        this['policy'] = policy;
    }
    public withDomainId(domainId: string): RoleResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withFlag(flag: string): RoleResult {
        this['flag'] = flag;
        return this;
    }
    public withDescriptionCn(descriptionCn: string): RoleResult {
        this['description_cn'] = descriptionCn;
        return this;
    }
    public set descriptionCn(descriptionCn: string | undefined) {
        this['description_cn'] = descriptionCn;
    }
    public get descriptionCn() {
        return this['description_cn'];
    }
    public withCatalog(catalog: string): RoleResult {
        this['catalog'] = catalog;
        return this;
    }
    public withName(name: string): RoleResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): RoleResult {
        this['description'] = description;
        return this;
    }
    public withLinks(links: Links): RoleResult {
        this['links'] = links;
        return this;
    }
    public withId(id: string): RoleResult {
        this['id'] = id;
        return this;
    }
    public withDisplayName(displayName: string): RoleResult {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName() {
        return this['display_name'];
    }
    public withType(type: string): RoleResult {
        this['type'] = type;
        return this;
    }
    public withPolicy(policy: RolePolicy): RoleResult {
        this['policy'] = policy;
        return this;
    }
    public withUpdatedTime(updatedTime: string): RoleResult {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime() {
        return this['updated_time'];
    }
    public withCreatedTime(createdTime: string): RoleResult {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
}