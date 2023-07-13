import { Metadata } from './Metadata';
import { PageLink } from './PageLink';
import { QueryRecordSetWithLineResp } from './QueryRecordSetWithLineResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateRecordSetWithLineResponse extends SdkResponse {
    public links?: PageLink;
    public recordsets?: Array<QueryRecordSetWithLineResp>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLinks(links: PageLink): BatchUpdateRecordSetWithLineResponse {
        this['links'] = links;
        return this;
    }
    public withRecordsets(recordsets: Array<QueryRecordSetWithLineResp>): BatchUpdateRecordSetWithLineResponse {
        this['recordsets'] = recordsets;
        return this;
    }
    public withMetadata(metadata: Metadata): BatchUpdateRecordSetWithLineResponse {
        this['metadata'] = metadata;
        return this;
    }
}