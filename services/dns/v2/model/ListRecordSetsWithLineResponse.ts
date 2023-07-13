import { Metadata } from './Metadata';
import { PageLink } from './PageLink';
import { QueryRecordSetWithLineAndTagsResp } from './QueryRecordSetWithLineAndTagsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecordSetsWithLineResponse extends SdkResponse {
    public links?: PageLink;
    public recordsets?: Array<QueryRecordSetWithLineAndTagsResp>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLinks(links: PageLink): ListRecordSetsWithLineResponse {
        this['links'] = links;
        return this;
    }
    public withRecordsets(recordsets: Array<QueryRecordSetWithLineAndTagsResp>): ListRecordSetsWithLineResponse {
        this['recordsets'] = recordsets;
        return this;
    }
    public withMetadata(metadata: Metadata): ListRecordSetsWithLineResponse {
        this['metadata'] = metadata;
        return this;
    }
}