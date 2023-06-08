import { Metadata } from './Metadata';
import { PageLink } from './PageLink';
import { QueryRecordSetWithLineResp } from './QueryRecordSetWithLineResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRecordSetWithBatchLinesResponse extends SdkResponse {
    public links?: PageLink;
    public recordsets?: Array<QueryRecordSetWithLineResp>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLinks(links: PageLink): CreateRecordSetWithBatchLinesResponse {
        this['links'] = links;
        return this;
    }
    public withRecordsets(recordsets: Array<QueryRecordSetWithLineResp>): CreateRecordSetWithBatchLinesResponse {
        this['recordsets'] = recordsets;
        return this;
    }
    public withMetadata(metadata: Metadata): CreateRecordSetWithBatchLinesResponse {
        this['metadata'] = metadata;
        return this;
    }
}