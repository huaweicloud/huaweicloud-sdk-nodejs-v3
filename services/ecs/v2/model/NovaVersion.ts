import { NovaLink } from './NovaLink';


export class NovaVersion {
    public id?: string;
    public links?: Array<NovaLink>;
    private 'min_version'?: string;
    public status?: NovaVersionStatusEnum | string;
    public version?: string;
    public updated?: string;
    public constructor(id?: string, links?: Array<NovaLink>, minVersion?: string, status?: string, version?: string, updated?: string) { 
        this['id'] = id;
        this['links'] = links;
        this['min_version'] = minVersion;
        this['status'] = status;
        this['version'] = version;
        this['updated'] = updated;
    }
    public withId(id: string): NovaVersion {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<NovaLink>): NovaVersion {
        this['links'] = links;
        return this;
    }
    public withMinVersion(minVersion: string): NovaVersion {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string  | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion(): string | undefined {
        return this['min_version'];
    }
    public withStatus(status: NovaVersionStatusEnum | string): NovaVersion {
        this['status'] = status;
        return this;
    }
    public withVersion(version: string): NovaVersion {
        this['version'] = version;
        return this;
    }
    public withUpdated(updated: string): NovaVersion {
        this['updated'] = updated;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NovaVersionStatusEnum {
    CURRENT = 'CURRENT',
    SUPPORTED = 'SUPPORTED',
    DEPRECATED = 'DEPRECATED'
}
