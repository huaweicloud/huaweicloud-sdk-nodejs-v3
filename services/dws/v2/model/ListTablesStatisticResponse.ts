import { ListTablesStatisticDto } from './ListTablesStatisticDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTablesStatisticResponse extends SdkResponse {
    private 'collect_time'?: number;
    public data?: Array<ListTablesStatisticDto>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withCollectTime(collectTime: number): ListTablesStatisticResponse {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: number  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): number | undefined {
        return this['collect_time'];
    }
    public withData(data: Array<ListTablesStatisticDto>): ListTablesStatisticResponse {
        this['data'] = data;
        return this;
    }
    public withCount(count: number): ListTablesStatisticResponse {
        this['count'] = count;
        return this;
    }
}