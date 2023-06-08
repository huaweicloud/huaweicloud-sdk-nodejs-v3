import { ListPtrRecordsFloatingResp } from './ListPtrRecordsFloatingResp';
import { Metadata } from './Metadata';
import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPtrRecordsResponse extends SdkResponse {
    public links?: PageLink;
    public metadata?: Metadata;
    public floatingips?: Array<ListPtrRecordsFloatingResp>;
    public constructor() { 
        super();
    }
    public withLinks(links: PageLink): ListPtrRecordsResponse {
        this['links'] = links;
        return this;
    }
    public withMetadata(metadata: Metadata): ListPtrRecordsResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withFloatingips(floatingips: Array<ListPtrRecordsFloatingResp>): ListPtrRecordsResponse {
        this['floatingips'] = floatingips;
        return this;
    }
}