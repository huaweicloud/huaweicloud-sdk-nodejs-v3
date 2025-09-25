import { ListAspResult } from './ListAspResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAspInfosResponse extends SdkResponse {
    public asp?: Array<ListAspResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withAsp(asp: Array<ListAspResult>): ListAspInfosResponse {
        this['asp'] = asp;
        return this;
    }
    public withTotalCount(totalCount: number): ListAspInfosResponse {
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