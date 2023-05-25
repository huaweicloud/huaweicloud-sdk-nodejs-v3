import { SelfLinksInfo } from './SelfLinksInfo';


export class ProjectsListInfo {
    private 'domain_id'?: string | undefined;
    private 'is_domain'?: boolean | undefined;
    private 'parent_id'?: string | undefined;
    public name?: string;
    public description?: string;
    public id?: string;
    public enabled?: boolean;
    public links?: SelfLinksInfo;
    public constructor() { 
    }
    public withDomainId(domainId: string): ProjectsListInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withIsDomain(isDomain: boolean): ProjectsListInfo {
        this['is_domain'] = isDomain;
        return this;
    }
    public set isDomain(isDomain: boolean | undefined) {
        this['is_domain'] = isDomain;
    }
    public get isDomain() {
        return this['is_domain'];
    }
    public withParentId(parentId: string): ProjectsListInfo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withName(name: string): ProjectsListInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ProjectsListInfo {
        this['description'] = description;
        return this;
    }
    public withId(id: string): ProjectsListInfo {
        this['id'] = id;
        return this;
    }
    public withEnabled(enabled: boolean): ProjectsListInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withLinks(links: SelfLinksInfo): ProjectsListInfo {
        this['links'] = links;
        return this;
    }
}