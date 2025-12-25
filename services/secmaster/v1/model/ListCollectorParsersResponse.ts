import { Parser } from './Parser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCollectorParsersResponse extends SdkResponse {
    public count?: number;
    public records?: Array<Parser>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListCollectorParsersResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<Parser>): ListCollectorParsersResponse {
        this['records'] = records;
        return this;
    }
}