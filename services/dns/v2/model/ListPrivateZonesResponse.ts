import { Metadata } from './Metadata';
import { PageLink } from './PageLink';
import { PrivateZoneResp } from './PrivateZoneResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateZonesResponse extends SdkResponse {
    public links?: PageLink;
    public metadata?: Metadata;
    public zones?: Array<PrivateZoneResp>;
    public constructor() { 
        super();
    }
    public withLinks(links: PageLink): ListPrivateZonesResponse {
        this['links'] = links;
        return this;
    }
    public withMetadata(metadata: Metadata): ListPrivateZonesResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withZones(zones: Array<PrivateZoneResp>): ListPrivateZonesResponse {
        this['zones'] = zones;
        return this;
    }
}