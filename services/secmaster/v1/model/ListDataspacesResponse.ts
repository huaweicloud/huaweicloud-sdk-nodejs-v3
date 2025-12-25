import { Dataspace } from './Dataspace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataspacesResponse extends SdkResponse {
    public count?: number;
    public records?: Array<Dataspace>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListDataspacesResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<Dataspace>): ListDataspacesResponse {
        this['records'] = records;
        return this;
    }
}