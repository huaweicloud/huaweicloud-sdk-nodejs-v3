import { DbObjectColumnInfo } from './DbObjectColumnInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowColumnInfoResultResponse extends SdkResponse {
    public results?: Array<DbObjectColumnInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<DbObjectColumnInfo>): ShowColumnInfoResultResponse {
        this['results'] = results;
        return this;
    }
    public withTotalCount(totalCount: number): ShowColumnInfoResultResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}