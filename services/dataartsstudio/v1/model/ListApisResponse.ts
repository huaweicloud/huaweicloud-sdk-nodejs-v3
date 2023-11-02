import { ApiOverview } from './ApiOverview';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApisResponse extends SdkResponse {
    public total?: number;
    public records?: Array<ApiOverview>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListApisResponse {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<ApiOverview>): ListApisResponse {
        this['records'] = records;
        return this;
    }
}