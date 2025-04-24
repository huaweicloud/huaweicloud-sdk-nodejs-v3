import { ApiVersionsLinks } from './ApiVersionsLinks';


export class ApiVersionsVersions {
    public id?: string;
    public links?: Array<ApiVersionsLinks>;
    public version?: string;
    private 'min_version'?: string;
    public status?: ApiVersionsVersionsStatusEnum | string;
    public updated?: string;
    public constructor() { 
    }
    public withId(id: string): ApiVersionsVersions {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<ApiVersionsLinks>): ApiVersionsVersions {
        this['links'] = links;
        return this;
    }
    public withVersion(version: string): ApiVersionsVersions {
        this['version'] = version;
        return this;
    }
    public withMinVersion(minVersion: string): ApiVersionsVersions {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string  | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion(): string | undefined {
        return this['min_version'];
    }
    public withStatus(status: ApiVersionsVersionsStatusEnum | string): ApiVersionsVersions {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): ApiVersionsVersions {
        this['updated'] = updated;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiVersionsVersionsStatusEnum {
    CURRENT = 'CURRENT',
    SUPPORTED = 'SUPPORTED',
    DEPRECATED = 'DEPRECATED'
}
