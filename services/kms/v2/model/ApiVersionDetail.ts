import { ApiLink } from './ApiLink';


export class ApiVersionDetail {
    public id?: string;
    public links?: Array<ApiLink>;
    public version?: string;
    public status?: string;
    public updated?: string;
    private 'min_version'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): ApiVersionDetail {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<ApiLink>): ApiVersionDetail {
        this['links'] = links;
        return this;
    }
    public withVersion(version: string): ApiVersionDetail {
        this['version'] = version;
        return this;
    }
    public withStatus(status: string): ApiVersionDetail {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): ApiVersionDetail {
        this['updated'] = updated;
        return this;
    }
    public withMinVersion(minVersion: string): ApiVersionDetail {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion() {
        return this['min_version'];
    }
}