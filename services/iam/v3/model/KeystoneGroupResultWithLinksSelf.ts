import { LinksSelf } from './LinksSelf';


export class KeystoneGroupResultWithLinksSelf {
    public description: string;
    public id: string;
    private 'domain_id': string | undefined;
    public name: string;
    public links: LinksSelf;
    private 'create_time': number | undefined;
    public constructor(description: any, id: any, domainId: any, name: any, links: any, createTime: any) { 
        this['description'] = description;
        this['id'] = id;
        this['domain_id'] = domainId;
        this['name'] = name;
        this['links'] = links;
        this['create_time'] = createTime;
    }
    public withDescription(description: string): KeystoneGroupResultWithLinksSelf {
        this['description'] = description;
        return this;
    }
    public withId(id: string): KeystoneGroupResultWithLinksSelf {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): KeystoneGroupResultWithLinksSelf {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withName(name: string): KeystoneGroupResultWithLinksSelf {
        this['name'] = name;
        return this;
    }
    public withLinks(links: LinksSelf): KeystoneGroupResultWithLinksSelf {
        this['links'] = links;
        return this;
    }
    public withCreateTime(createTime: number): KeystoneGroupResultWithLinksSelf {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
}