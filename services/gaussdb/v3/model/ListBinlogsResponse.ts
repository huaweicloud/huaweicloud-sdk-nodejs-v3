import { BinlogInfo } from './BinlogInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBinlogsResponse extends SdkResponse {
    private 'total_count'?: number;
    public binlogs?: Array<BinlogInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListBinlogsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withBinlogs(binlogs: Array<BinlogInfo>): ListBinlogsResponse {
        this['binlogs'] = binlogs;
        return this;
    }
}