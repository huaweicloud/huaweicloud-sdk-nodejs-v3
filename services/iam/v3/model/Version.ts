import { VersionLinks } from './VersionLinks';
import { VersionMediatypes } from './VersionMediatypes';


export class Version {
    public status?: string;
    public updated?: string;
    public links?: Array<VersionLinks>;
    public id?: string;
    private 'media-types'?: Array<VersionMediatypes>;
    public constructor(status?: string, updated?: string, links?: Array<VersionLinks>, id?: string, mediaTypes?: Array<VersionMediatypes>) { 
        this['status'] = status;
        this['updated'] = updated;
        this['links'] = links;
        this['id'] = id;
        this['media-types'] = mediaTypes;
    }
    public withStatus(status: string): Version {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): Version {
        this['updated'] = updated;
        return this;
    }
    public withLinks(links: Array<VersionLinks>): Version {
        this['links'] = links;
        return this;
    }
    public withId(id: string): Version {
        this['id'] = id;
        return this;
    }
    public withMediaTypes(mediaTypes: Array<VersionMediatypes>): Version {
        this['media-types'] = mediaTypes;
        return this;
    }
    public set mediaTypes(mediaTypes: Array<VersionMediatypes>  | undefined) {
        this['media-types'] = mediaTypes;
    }
    public get mediaTypes(): Array<VersionMediatypes> | undefined {
        return this['media-types'];
    }
}