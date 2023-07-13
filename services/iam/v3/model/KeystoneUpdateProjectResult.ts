import { LinksSelf } from './LinksSelf';


export class KeystoneUpdateProjectResult {
    private 'is_domain': boolean | undefined;
    public description: string;
    public extra?: object;
    public links: LinksSelf;
    public enabled: boolean;
    public id: string;
    private 'parent_id': string | undefined;
    private 'domain_id': string | undefined;
    public name: string;
    public constructor(isDomain?: any, description?: any, links?: any, enabled?: any, id?: any, parentId?: any, domainId?: any, name?: any) { 
        this['is_domain'] = isDomain;
        this['description'] = description;
        this['links'] = links;
        this['enabled'] = enabled;
        this['id'] = id;
        this['parent_id'] = parentId;
        this['domain_id'] = domainId;
        this['name'] = name;
    }
    public withIsDomain(isDomain: boolean): KeystoneUpdateProjectResult {
        this['is_domain'] = isDomain;
        return this;
    }
    public set isDomain(isDomain: boolean | undefined) {
        this['is_domain'] = isDomain;
    }
    public get isDomain() {
        return this['is_domain'];
    }
    public withDescription(description: string): KeystoneUpdateProjectResult {
        this['description'] = description;
        return this;
    }
    public withExtra(extra: object): KeystoneUpdateProjectResult {
        this['extra'] = extra;
        return this;
    }
    public withLinks(links: LinksSelf): KeystoneUpdateProjectResult {
        this['links'] = links;
        return this;
    }
    public withEnabled(enabled: boolean): KeystoneUpdateProjectResult {
        this['enabled'] = enabled;
        return this;
    }
    public withId(id: string): KeystoneUpdateProjectResult {
        this['id'] = id;
        return this;
    }
    public withParentId(parentId: string): KeystoneUpdateProjectResult {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withDomainId(domainId: string): KeystoneUpdateProjectResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withName(name: string): KeystoneUpdateProjectResult {
        this['name'] = name;
        return this;
    }
}