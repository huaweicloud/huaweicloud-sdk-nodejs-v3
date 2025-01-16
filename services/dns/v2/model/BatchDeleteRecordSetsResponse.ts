import { Metadata } from './Metadata';
import { RecordsetData } from './RecordsetData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteRecordSetsResponse extends SdkResponse {
    public recordsets?: Array<RecordsetData>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withRecordsets(recordsets: Array<RecordsetData>): BatchDeleteRecordSetsResponse {
        this['recordsets'] = recordsets;
        return this;
    }
    public withMetadata(metadata: Metadata): BatchDeleteRecordSetsResponse {
        this['metadata'] = metadata;
        return this;
    }
}