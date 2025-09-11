import { AccessKeyInfo } from './AccessKeyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppAccessKeyListResponse extends SdkResponse {
    public result?: Array<AccessKeyInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withResult(result: Array<AccessKeyInfo>): ShowAppAccessKeyListResponse {
        this['result'] = result;
        return this;
    }
    public withTotalNum(totalNum: number): ShowAppAccessKeyListResponse {
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