import { NeutronPageLink } from './NeutronPageLink';


export class VersionResult {
    public status: VersionResultStatusEnum;
    public id: string;
    public links: Array<NeutronPageLink>;
    public constructor(status?: any, id?: any, links?: any) { 
        this['status'] = status;
        this['id'] = id;
        this['links'] = links;
    }
    public withStatus(status: VersionResultStatusEnum): VersionResult {
        this['status'] = status;
        return this;
    }
    public withId(id: string): VersionResult {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<NeutronPageLink>): VersionResult {
        this['links'] = links;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VersionResultStatusEnum {
    CURRENT = 'CURRENT',
    STABLE = 'STABLE',
    DEPRECATED = 'DEPRECATED'
}
