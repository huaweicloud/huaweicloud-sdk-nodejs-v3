import { Pipe } from './Pipe';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPipesResponse extends SdkResponse {
    public count?: number;
    public records?: Array<Pipe>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListPipesResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<Pipe>): ListPipesResponse {
        this['records'] = records;
        return this;
    }
}