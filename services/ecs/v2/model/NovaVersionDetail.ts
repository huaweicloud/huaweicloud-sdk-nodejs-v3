import { NovaLink } from './NovaLink';
import { NovaVersionMediaType } from './NovaVersionMediaType';


export class NovaVersionDetail {
    public id?: string;
    public links?: Array<NovaLink>;
    private 'media-types'?: Array<NovaVersionMediaType>;
    private 'min_version'?: string;
    public status?: NovaVersionDetailStatusEnum | string;
    public updated?: string;
    public version?: string;
    public constructor(id?: string, links?: Array<NovaLink>, mediaTypes?: Array<NovaVersionMediaType>, minVersion?: string, status?: string, updated?: string, version?: string) { 
        this['id'] = id;
        this['links'] = links;
        this['media-types'] = mediaTypes;
        this['min_version'] = minVersion;
        this['status'] = status;
        this['updated'] = updated;
        this['version'] = version;
    }
    public withId(id: string): NovaVersionDetail {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<NovaLink>): NovaVersionDetail {
        this['links'] = links;
        return this;
    }
    public withMediaTypes(mediaTypes: Array<NovaVersionMediaType>): NovaVersionDetail {
        this['media-types'] = mediaTypes;
        return this;
    }
    public set mediaTypes(mediaTypes: Array<NovaVersionMediaType>  | undefined) {
        this['media-types'] = mediaTypes;
    }
    public get mediaTypes(): Array<NovaVersionMediaType> | undefined {
        return this['media-types'];
    }
    public withMinVersion(minVersion: string): NovaVersionDetail {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string  | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion(): string | undefined {
        return this['min_version'];
    }
    public withStatus(status: NovaVersionDetailStatusEnum | string): NovaVersionDetail {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): NovaVersionDetail {
        this['updated'] = updated;
        return this;
    }
    public withVersion(version: string): NovaVersionDetail {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NovaVersionDetailStatusEnum {
    CURRENT = 'CURRENT',
    SUPPORTED = 'SUPPORTED',
    DEPRECATED = 'DEPRECATED'
}
