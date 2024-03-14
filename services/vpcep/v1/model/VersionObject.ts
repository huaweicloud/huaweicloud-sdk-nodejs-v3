import { Link } from './Link';


export class VersionObject {
    public status?: string;
    public id?: string;
    public updated?: Date;
    public version?: string;
    private 'min_version'?: string;
    public links?: Array<Link>;
    public constructor() { 
    }
    public withStatus(status: string): VersionObject {
        this['status'] = status;
        return this;
    }
    public withId(id: string): VersionObject {
        this['id'] = id;
        return this;
    }
    public withUpdated(updated: Date): VersionObject {
        this['updated'] = updated;
        return this;
    }
    public withVersion(version: string): VersionObject {
        this['version'] = version;
        return this;
    }
    public withMinVersion(minVersion: string): VersionObject {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string  | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion(): string | undefined {
        return this['min_version'];
    }
    public withLinks(links: Array<Link>): VersionObject {
        this['links'] = links;
        return this;
    }
}