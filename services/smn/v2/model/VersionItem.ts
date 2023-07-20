import { LinksItem } from './LinksItem';


export class VersionItem {
    public id?: string;
    private 'min_version'?: string;
    public status?: string;
    public updated?: string;
    public version?: string;
    public links?: Array<LinksItem>;
    public constructor(id?: string, minVersion?: string, status?: string, updated?: string, version?: string, links?: Array<LinksItem>) { 
        this['id'] = id;
        this['min_version'] = minVersion;
        this['status'] = status;
        this['updated'] = updated;
        this['version'] = version;
        this['links'] = links;
    }
    public withId(id: string): VersionItem {
        this['id'] = id;
        return this;
    }
    public withMinVersion(minVersion: string): VersionItem {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string  | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion(): string | undefined {
        return this['min_version'];
    }
    public withStatus(status: string): VersionItem {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): VersionItem {
        this['updated'] = updated;
        return this;
    }
    public withVersion(version: string): VersionItem {
        this['version'] = version;
        return this;
    }
    public withLinks(links: Array<LinksItem>): VersionItem {
        this['links'] = links;
        return this;
    }
}