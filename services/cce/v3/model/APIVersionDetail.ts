import { APIVersionLink } from './APIVersionLink';


export class APIVersionDetail {
    public id?: string;
    public links?: Array<APIVersionLink>;
    private 'min_version'?: string;
    public status?: APIVersionDetailStatusEnum | string;
    public updated?: string;
    public version?: string;
    public constructor(id?: string, links?: Array<APIVersionLink>, minVersion?: string, status?: string, updated?: string, version?: string) { 
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
    public set minVersion(minVersion: string  | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion(): string | undefined {
        return this['min_version'];
    }
    public withStatus(status: APIVersionDetailStatusEnum | string): APIVersionDetail {
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
