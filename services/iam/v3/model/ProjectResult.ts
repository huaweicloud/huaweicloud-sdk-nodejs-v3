import { Links } from './Links';


export class ProjectResult {
    private 'is_domain': boolean | undefined;
    public description: string;
    public links: Links;
    public enabled: boolean;
    public id: string;
    private 'parent_id': string | undefined;
    private 'domain_id': string | undefined;
    public name: string;
    public constructor(isDomain: any, description: any, links: any, enabled: any, id: any, parentId: any, domainId: any, name: any) { 
        this['is_domain'] = isDomain;
        this['description'] = description;
        this['links'] = links;
        this['enabled'] = enabled;
        this['id'] = id;
        this['parent_id'] = parentId;
        this['domain_id'] = domainId;
        this['name'] = name;
    }
    public withIsDomain(isDomain: boolean): ProjectResult {
        this['is_domain'] = isDomain;
        return this;
    }
    public set isDomain(isDomain: boolean | undefined) {
        this['is_domain'] = isDomain;
    }
    public get isDomain() {
        return this['is_domain'];
    }
    public withDescription(description: string): ProjectResult {
        this['description'] = description;
        return this;
    }
    public withLinks(links: Links): ProjectResult {
        this['links'] = links;
        return this;
    }
    public withEnabled(enabled: boolean): ProjectResult {
        this['enabled'] = enabled;
        return this;
    }
    public withId(id: string): ProjectResult {
        this['id'] = id;
        return this;
    }
    public withParentId(parentId: string): ProjectResult {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withDomainId(domainId: string): ProjectResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withName(name: string): ProjectResult {
        this['name'] = name;
        return this;
    }
}