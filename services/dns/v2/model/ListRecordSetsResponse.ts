import { ListRecordSetsWithTags } from './ListRecordSetsWithTags';
import { Metadata } from './Metadata';
import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecordSetsResponse extends SdkResponse {
    public links?: PageLink;
    public recordsets?: Array<ListRecordSetsWithTags>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLinks(links: PageLink): ListRecordSetsResponse {
        this['links'] = links;
        return this;
    }
    public withRecordsets(recordsets: Array<ListRecordSetsWithTags>): ListRecordSetsResponse {
        this['recordsets'] = recordsets;
        return this;
    }
    public withMetadata(metadata: Metadata): ListRecordSetsResponse {
        this['metadata'] = metadata;
        return this;
    }
}