import { Link } from './Link';


export class VersionObject {
    public status?: VersionObjectStatusEnum | string;
    public id?: VersionObjectIdEnum | string;
    public updated?: string;
    public version?: string;
    private 'min_version'?: string;
    public links?: Array<Link>;
    public constructor() { 
    }
    public withStatus(status: VersionObjectStatusEnum | string): VersionObject {
        this['status'] = status;
        return this;
    }
    public withId(id: VersionObjectIdEnum | string): VersionObject {
        this['id'] = id;
        return this;
    }
    public withUpdated(updated: string): VersionObject {
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

/**
    * @export
    * @enum {string}
    */
export enum VersionObjectStatusEnum {
    CURRENT = 'CURRENT',
    SUPPORT = 'SUPPORT',
    DEPRECATED = 'DEPRECATED'
}
/**
    * @export
    * @enum {string}
    */
export enum VersionObjectIdEnum {
    V1 = 'v1'
}
