import { Link } from './Link';


export class VersionDetail {
    public id?: string;
    public links?: Array<Link>;
    public version?: string;
    public status?: VersionDetailStatusEnum | string;
    public updated?: Date;
    private 'min_version'?: string;
    public constructor(id?: string, links?: Array<Link>, version?: string, status?: string, updated?: Date, minVersion?: string) { 
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
    public withLinks(links: Array<Link>): VersionDetail {
        this['links'] = links;
        return this;
    }
    public withVersion(version: string): VersionDetail {
        this['version'] = version;
        return this;
    }
    public withStatus(status: VersionDetailStatusEnum | string): VersionDetail {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: Date): VersionDetail {
        this['updated'] = updated;
        return this;
    }
    public withMinVersion(minVersion: string): VersionDetail {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string  | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion(): string | undefined {
        return this['min_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VersionDetailStatusEnum {
    CURRENT = 'CURRENT',
    SUPPORTED = 'SUPPORTED',
    DEPRECATED = 'DEPRECATED'
}
