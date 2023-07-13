import { Metadata } from './Metadata';
import { PageLink } from './PageLink';
import { PublicZoneResp } from './PublicZoneResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublicZonesResponse extends SdkResponse {
    public links?: PageLink;
    public zones?: Array<PublicZoneResp>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLinks(links: PageLink): ListPublicZonesResponse {
        this['links'] = links;
        return this;
    }
    public withZones(zones: Array<PublicZoneResp>): ListPublicZonesResponse {
        this['zones'] = zones;
        return this;
    }
    public withMetadata(metadata: Metadata): ListPublicZonesResponse {
        this['metadata'] = metadata;
        return this;
    }
}