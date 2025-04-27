import { Metadata } from './Metadata';
import { PageLink } from './PageLink';
import { PublicZoneLines } from './PublicZoneLines';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublicZoneLinesResponse extends SdkResponse {
    public links?: PageLink;
    public lines?: Array<PublicZoneLines>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLinks(links: PageLink): ListPublicZoneLinesResponse {
        this['links'] = links;
        return this;
    }
    public withLines(lines: Array<PublicZoneLines>): ListPublicZoneLinesResponse {
        this['lines'] = lines;
        return this;
    }
    public withMetadata(metadata: Metadata): ListPublicZoneLinesResponse {
        this['metadata'] = metadata;
        return this;
    }
}