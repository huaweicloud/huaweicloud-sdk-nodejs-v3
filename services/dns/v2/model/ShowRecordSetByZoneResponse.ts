import { Metadata } from './Metadata';
import { PageLink } from './PageLink';
import { ShowRecordSetByZoneResp } from './ShowRecordSetByZoneResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecordSetByZoneResponse extends SdkResponse {
    public links?: PageLink;
    public recordsets?: Array<ShowRecordSetByZoneResp>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLinks(links: PageLink): ShowRecordSetByZoneResponse {
        this['links'] = links;
        return this;
    }
    public withRecordsets(recordsets: Array<ShowRecordSetByZoneResp>): ShowRecordSetByZoneResponse {
        this['recordsets'] = recordsets;
        return this;
    }
    public withMetadata(metadata: Metadata): ShowRecordSetByZoneResponse {
        this['metadata'] = metadata;
        return this;
    }
}