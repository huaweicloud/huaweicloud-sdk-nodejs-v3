import { ComponentDetailInfo } from './ComponentDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIsapComponentsResponse extends SdkResponse {
    public count?: number;
    public records?: Array<ComponentDetailInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListIsapComponentsResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<ComponentDetailInfo>): ListIsapComponentsResponse {
        this['records'] = records;
        return this;
    }
}