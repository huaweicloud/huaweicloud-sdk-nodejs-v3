import { VersionLinks } from './VersionLinks';


export class Versions {
    public id?: VersionsIdEnum | string;
    public links?: Array<VersionLinks>;
    private 'min_version'?: string;
    public status?: VersionsStatusEnum | string;
    public version?: string;
    public updated?: Date;
    public constructor() { 
    }
    public withId(id: VersionsIdEnum | string): Versions {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<VersionLinks>): Versions {
        this['links'] = links;
        return this;
    }
    public withMinVersion(minVersion: string): Versions {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string  | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion(): string | undefined {
        return this['min_version'];
    }
    public withStatus(status: VersionsStatusEnum | string): Versions {
        this['status'] = status;
        return this;
    }
    public withVersion(version: string): Versions {
        this['version'] = version;
        return this;
    }
    public withUpdated(updated: Date): Versions {
        this['updated'] = updated;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VersionsIdEnum {
    V1 = 'v1'
}
/**
    * @export
    * @enum {string}
    */
export enum VersionsStatusEnum {
    CURRENT = 'CURRENT',
    SUPPORTED = 'SUPPORTED',
    DEPRECATED = 'DEPRECATED'
}
