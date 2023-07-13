import { Link } from './Link';


export class VersionObject {
    public status?: VersionObjectStatusEnum;
    public id?: VersionObjectIdEnum;
    public updated?: string;
    public version?: string;
    private 'min_version'?: string | undefined;
    public links?: Array<Link>;
    public constructor() { 
    }
    public withStatus(status: VersionObjectStatusEnum): VersionObject {
        this['status'] = status;
        return this;
    }
    public withId(id: VersionObjectIdEnum): VersionObject {
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
    public set minVersion(minVersion: string | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion() {
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
