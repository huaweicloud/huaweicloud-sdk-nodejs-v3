import { Metadata } from './Metadata';
import { PageLink } from './PageLink';
import { QueryRecordSetWithLineResp } from './QueryRecordSetWithLineResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteRecordSetWithLineResponse extends SdkResponse {
    public links?: PageLink;
    public recordsets?: Array<QueryRecordSetWithLineResp>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLinks(links: PageLink): BatchDeleteRecordSetWithLineResponse {
        this['links'] = links;
        return this;
    }
    public withRecordsets(recordsets: Array<QueryRecordSetWithLineResp>): BatchDeleteRecordSetWithLineResponse {
        this['recordsets'] = recordsets;
        return this;
    }
    public withMetadata(metadata: Metadata): BatchDeleteRecordSetWithLineResponse {
        this['metadata'] = metadata;
        return this;
    }
}