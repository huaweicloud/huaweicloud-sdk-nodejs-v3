import { ColumnProcessObjects } from './ColumnProcessObjects';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExtraColumnsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'column_process_objects'?: Array<ColumnProcessObjects>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListExtraColumnsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withColumnProcessObjects(columnProcessObjects: Array<ColumnProcessObjects>): ListExtraColumnsResponse {
        this['column_process_objects'] = columnProcessObjects;
        return this;
    }
    public set columnProcessObjects(columnProcessObjects: Array<ColumnProcessObjects>  | undefined) {
        this['column_process_objects'] = columnProcessObjects;
    }
    public get columnProcessObjects(): Array<ColumnProcessObjects> | undefined {
        return this['column_process_objects'];
    }
}