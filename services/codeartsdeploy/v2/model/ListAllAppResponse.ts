import { AppExecutionInfo } from './AppExecutionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllAppResponse extends SdkResponse {
    private 'total_num'?: number;
    public result?: Array<AppExecutionInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAllAppResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withResult(result: Array<AppExecutionInfo>): ListAllAppResponse {
        this['result'] = result;
        return this;
    }
}