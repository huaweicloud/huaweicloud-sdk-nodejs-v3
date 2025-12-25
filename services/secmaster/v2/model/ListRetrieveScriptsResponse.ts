import { RetrieveScript } from './RetrieveScript';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRetrieveScriptsResponse extends SdkResponse {
    public listcount?: number;
    public records?: Array<RetrieveScript>;
    public constructor() { 
        super();
    }
    public withListcount(listcount: number): ListRetrieveScriptsResponse {
        this['listcount'] = listcount;
        return this;
    }
    public withRecords(records: Array<RetrieveScript>): ListRetrieveScriptsResponse {
        this['records'] = records;
        return this;
    }
}