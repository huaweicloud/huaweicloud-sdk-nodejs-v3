import { Links } from './Links';
import { Metadata } from './Metadata';
import { RecordSet } from './RecordSet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecordSetsResponse extends SdkResponse {
    public links?: Links;
    public recordsets?: Array<RecordSet>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): ListRecordSetsResponse {
        this['links'] = links;
        return this;
    }
    public withRecordsets(recordsets: Array<RecordSet>): ListRecordSetsResponse {
        this['recordsets'] = recordsets;
        return this;
    }
    public withMetadata(metadata: Metadata): ListRecordSetsResponse {
        this['metadata'] = metadata;
        return this;
    }
}