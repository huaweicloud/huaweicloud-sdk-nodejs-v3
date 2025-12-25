import { PipeItem } from './PipeItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPipesResponse extends SdkResponse {
    public count?: number;
    public records?: Array<PipeItem>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListPipesResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<PipeItem>): ListPipesResponse {
        this['records'] = records;
        return this;
    }
}