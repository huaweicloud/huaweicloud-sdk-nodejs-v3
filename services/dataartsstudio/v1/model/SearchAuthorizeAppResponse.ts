import { RecordForGetAuthApp } from './RecordForGetAuthApp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchAuthorizeAppResponse extends SdkResponse {
    public total?: number;
    public records?: Array<RecordForGetAuthApp>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): SearchAuthorizeAppResponse {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<RecordForGetAuthApp>): SearchAuthorizeAppResponse {
        this['records'] = records;
        return this;
    }
}