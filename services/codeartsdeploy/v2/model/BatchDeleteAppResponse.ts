import { AppDeleteResult } from './AppDeleteResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteAppResponse extends SdkResponse {
    public result?: Array<AppDeleteResult>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withResult(result: Array<AppDeleteResult>): BatchDeleteAppResponse {
        this['result'] = result;
        return this;
    }
    public withTotalNum(totalNum: number): BatchDeleteAppResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}