import { AppInfo } from './AppInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppListResponse extends SdkResponse {
    private 'total_num'?: number;
    public result?: Array<AppInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowAppListResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withResult(result: Array<AppInfo>): ShowAppListResponse {
        this['result'] = result;
        return this;
    }
}