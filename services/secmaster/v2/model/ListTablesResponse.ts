import { IsapTable } from './IsapTable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTablesResponse extends SdkResponse {
    public count?: number;
    public records?: Array<IsapTable>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTablesResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<IsapTable>): ListTablesResponse {
        this['records'] = records;
        return this;
    }
}