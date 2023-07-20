import { SlowLogFile } from './SlowLogFile';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowLogFileResponse extends SdkResponse {
    public list?: Array<SlowLogFile>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withList(list: Array<SlowLogFile>): ListSlowLogFileResponse {
        this['list'] = list;
        return this;
    }
    public withTotalCount(totalCount: number): ListSlowLogFileResponse {
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