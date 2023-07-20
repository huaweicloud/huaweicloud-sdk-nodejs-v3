import { Links } from './Links';


export class KeystoneGroupResult {
    public description?: string;
    public id?: string;
    private 'domain_id'?: string;
    public name?: string;
    public links?: Links;
    private 'create_time'?: number;
    public constructor(description?: string, id?: string, domainId?: string, name?: string, links?: Links, createTime?: number) { 
        this['description'] = description;
        this['id'] = id;
        this['domain_id'] = domainId;
        this['name'] = name;
        this['links'] = links;
        this['create_time'] = createTime;
    }
    public withDescription(description: string): KeystoneGroupResult {
        this['description'] = description;
        return this;
    }
    public withId(id: string): KeystoneGroupResult {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): KeystoneGroupResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withName(name: string): KeystoneGroupResult {
        this['name'] = name;
        return this;
    }
    public withLinks(links: Links): KeystoneGroupResult {
        this['links'] = links;
        return this;
    }
    public withCreateTime(createTime: number): KeystoneGroupResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}