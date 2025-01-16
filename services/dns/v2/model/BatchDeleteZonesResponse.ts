import { Metadata } from './Metadata';
import { ZoneData } from './ZoneData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteZonesResponse extends SdkResponse {
    public zones?: Array<ZoneData>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withZones(zones: Array<ZoneData>): BatchDeleteZonesResponse {
        this['zones'] = zones;
        return this;
    }
    public withMetadata(metadata: Metadata): BatchDeleteZonesResponse {
        this['metadata'] = metadata;
        return this;
    }
}