import { AppBindApiInfo } from './AppBindApiInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchBindApiResponse extends SdkResponse {
    public total?: number;
    public records?: Array<AppBindApiInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): SearchBindApiResponse {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<AppBindApiInfo>): SearchBindApiResponse {
        this['records'] = records;
        return this;
    }
}