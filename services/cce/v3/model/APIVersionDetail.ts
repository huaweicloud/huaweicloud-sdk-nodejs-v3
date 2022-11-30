import { APIVersionLink } from './APIVersionLink';


export class APIVersionDetail {
    public id: string;
    public links: Array<APIVersionLink>;
    private 'min_version': string | undefined;
    public status: APIVersionDetailStatusEnum;
    public updated: string;
    public version: string;
    public constructor(id?: any, links?: any, minVersion?: any, status?: any, updated?: any, version?: any) { 
        this['id'] = id;
        this['links'] = links;
        this['min_version'] = minVersion;
        this['status'] = status;
        this['updated'] = updated;
        this['version'] = version;
    }
    public withId(id: string): APIVersionDetail {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<APIVersionLink>): APIVersionDetail {
        this['links'] = links;
        return this;
    }
    public withMinVersion(minVersion: string): APIVersionDetail {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion() {
        return this['min_version'];
    }
    public withStatus(status: APIVersionDetailStatusEnum): APIVersionDetail {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): APIVersionDetail {
        this['updated'] = updated;
        return this;
    }
    public withVersion(version: string): APIVersionDetail {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum APIVersionDetailStatusEnum {
    CURRENT = 'CURRENT',
    SUPPORTED = 'SUPPORTED',
    DEPRECATED = 'DEPRECATED'
}
