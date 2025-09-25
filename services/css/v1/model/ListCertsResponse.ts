import { CertsRecordsDatastore } from './CertsRecordsDatastore';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCertsResponse extends SdkResponse {
    public certsRecords?: CertsRecordsDatastore;
    public totalSize?: number;
    public constructor() { 
        super();
    }
    public withCertsRecords(certsRecords: CertsRecordsDatastore): ListCertsResponse {
        this['certsRecords'] = certsRecords;
        return this;
    }
    public withTotalSize(totalSize: number): ListCertsResponse {
        this['totalSize'] = totalSize;
        return this;
    }
}