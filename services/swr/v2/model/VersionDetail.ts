import { Link } from './Link';


export class VersionDetail {
    public id: string;
    public links: Link;
    public version: string;
    public status: string;
    public updated: string;
    private 'min_version': string | undefined;
    public constructor(id?: any, links?: any, version?: any, status?: any, updated?: any, minVersion?: any) { 
        this['id'] = id;
        this['links'] = links;
        this['version'] = version;
        this['status'] = status;
        this['updated'] = updated;
        this['min_version'] = minVersion;
    }
    public withId(id: string): VersionDetail {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Link): VersionDetail {
        this['links'] = links;
        return this;
    }
    public withVersion(version: string): VersionDetail {
        this['version'] = version;
        return this;
    }
    public withStatus(status: string): VersionDetail {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): VersionDetail {
        this['updated'] = updated;
        return this;
    }
    public withMinVersion(minVersion: string): VersionDetail {
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