import { Link } from './Link';
import { Metadata } from './Metadata';
import { ZoneData } from './ZoneData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSetZonesStatusResponse extends SdkResponse {
    public links?: Link;
    public zones?: Array<ZoneData>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLinks(links: Link): BatchSetZonesStatusResponse {
        this['links'] = links;
        return this;
    }
    public withZones(zones: Array<ZoneData>): BatchSetZonesStatusResponse {
        this['zones'] = zones;
        return this;
    }
    public withMetadata(metadata: Metadata): BatchSetZonesStatusResponse {
        this['metadata'] = metadata;
        return this;
    }
}