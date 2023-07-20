import { Links } from './Links';


export class VersionInfo {
    public id?: VersionInfoIdEnum | string;
    public links?: Array<Links>;
    private 'min_version'?: string;
    public status?: VersionInfoStatusEnum | string;
    public update?: Date;
    public version?: string;
    public constructor() { 
    }
    public withId(id: VersionInfoIdEnum | string): VersionInfo {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Links>): VersionInfo {
        this['links'] = links;
        return this;
    }
    public withMinVersion(minVersion: string): VersionInfo {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string  | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion(): string | undefined {
        return this['min_version'];
    }
    public withStatus(status: VersionInfoStatusEnum | string): VersionInfo {
        this['status'] = status;
        return this;
    }
    public withUpdate(update: Date): VersionInfo {
        this['update'] = update;
        return this;
    }
    public withVersion(version: string): VersionInfo {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VersionInfoIdEnum {
    V1 = 'v1',
    V2 = 'v2'
}
/**
    * @export
    * @enum {string}
    */
export enum VersionInfoStatusEnum {
    CURRENT = 'CURRENT',
    SUPPORT = 'SUPPORT',
    DEPRECATED = 'DEPRECATED'
}
