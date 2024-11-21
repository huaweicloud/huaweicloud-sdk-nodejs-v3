import { Links } from './Links';
import { RolePolicy } from './RolePolicy';


export class InheritedRoleResult {
    public flag?: string;
    private 'description_cn'?: string;
    public catalog?: string;
    public name?: string;
    public description?: string;
    public links?: Links;
    public id?: string;
    private 'display_name'?: string;
    public type?: string;
    public policy?: RolePolicy;
    private 'updated_time'?: string;
    private 'created_time'?: string;
    public constructor(name?: string, id?: string, type?: string, policy?: RolePolicy) { 
        this['name'] = name;
        this['id'] = id;
        this['type'] = type;
        this['policy'] = policy;
    }
    public withFlag(flag: string): InheritedRoleResult {
        this['flag'] = flag;
        return this;
    }
    public withDescriptionCn(descriptionCn: string): InheritedRoleResult {
        this['description_cn'] = descriptionCn;
        return this;
    }
    public set descriptionCn(descriptionCn: string  | undefined) {
        this['description_cn'] = descriptionCn;
    }
    public get descriptionCn(): string | undefined {
        return this['description_cn'];
    }
    public withCatalog(catalog: string): InheritedRoleResult {
        this['catalog'] = catalog;
        return this;
    }
    public withName(name: string): InheritedRoleResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): InheritedRoleResult {
        this['description'] = description;
        return this;
    }
    public withLinks(links: Links): InheritedRoleResult {
        this['links'] = links;
        return this;
    }
    public withId(id: string): InheritedRoleResult {
        this['id'] = id;
        return this;
    }
    public withDisplayName(displayName: string): InheritedRoleResult {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withType(type: string): InheritedRoleResult {
        this['type'] = type;
        return this;
    }
    public withPolicy(policy: RolePolicy): InheritedRoleResult {
        this['policy'] = policy;
        return this;
    }
    public withUpdatedTime(updatedTime: string): InheritedRoleResult {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withCreatedTime(createdTime: string): InheritedRoleResult {
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