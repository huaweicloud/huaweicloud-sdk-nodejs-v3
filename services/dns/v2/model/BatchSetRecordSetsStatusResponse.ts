import { Link } from './Link';
import { Metadata } from './Metadata';
import { RecordsetData } from './RecordsetData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSetRecordSetsStatusResponse extends SdkResponse {
    public links?: Link;
    public recordsets?: Array<RecordsetData>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLinks(links: Link): BatchSetRecordSetsStatusResponse {
        this['links'] = links;
        return this;
    }
    public withRecordsets(recordsets: Array<RecordsetData>): BatchSetRecordSetsStatusResponse {
        this['recordsets'] = recordsets;
        return this;
    }
    public withMetadata(metadata: Metadata): BatchSetRecordSetsStatusResponse {
        this['metadata'] = metadata;
        return this;
    }
}