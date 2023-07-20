import { Link } from './Link';
import { MediaTypes } from './MediaTypes';


export class Versions {
    public id?: string;
    public links?: Array<Link>;
    private 'media-types'?: Array<MediaTypes>;
    private 'min_version'?: string;
    public status?: string;
    public updated?: string;
    public version?: string;
    public constructor(id?: string, links?: Array<Link>, mediaTypes?: Array<MediaTypes>, status?: string, updated?: string, version?: string) { 
        this['id'] = id;
        this['links'] = links;
        this['media-types'] = mediaTypes;
        this['status'] = status;
        this['updated'] = updated;
        this['version'] = version;
    }
    public withId(id: string): Versions {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Link>): Versions {
        this['links'] = links;
        return this;
    }
    public withMediaTypes(mediaTypes: Array<MediaTypes>): Versions {
        this['media-types'] = mediaTypes;
        return this;
    }
    public set mediaTypes(mediaTypes: Array<MediaTypes>  | undefined) {
        this['media-types'] = mediaTypes;
    }
    public get mediaTypes(): Array<MediaTypes> | undefined {
        return this['media-types'];
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
    public withStatus(status: string): Versions {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): Versions {
        this['updated'] = updated;
        return this;
    }
    public withVersion(version: string): Versions {
        this['version'] = version;
        return this;
    }
}