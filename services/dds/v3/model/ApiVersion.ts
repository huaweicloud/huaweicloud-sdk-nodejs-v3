import { Links } from './Links';


export class ApiVersion {
    public id?: string;
    public links?: Array<Links>;
    public status?: string;
    public version?: string;
    private 'min_version'?: string;
    public updated?: string;
    public constructor(id?: string, links?: Array<Links>, status?: string, version?: string, minVersion?: string, updated?: string) { 
        this['id'] = id;
        this['links'] = links;
        this['status'] = status;
        this['version'] = version;
        this['min_version'] = minVersion;
        this['updated'] = updated;
    }
    public withId(id: string): ApiVersion {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Links>): ApiVersion {
        this['links'] = links;
        return this;
    }
    public withStatus(status: string): ApiVersion {
        this['status'] = status;
        return this;
    }
    public withVersion(version: string): ApiVersion {
        this['version'] = version;
        return this;
    }
    public withMinVersion(minVersion: string): ApiVersion {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string  | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion(): string | undefined {
        return this['min_version'];
    }
    public withUpdated(updated: string): ApiVersion {
        this['updated'] = updated;
        return this;
    }
}