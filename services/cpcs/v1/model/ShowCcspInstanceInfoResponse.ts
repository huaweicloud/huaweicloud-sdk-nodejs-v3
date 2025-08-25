import { CcspInstanceInfo } from './CcspInstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCcspInstanceInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    public result?: Array<CcspInstanceInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowCcspInstanceInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withResult(result: Array<CcspInstanceInfo>): ShowCcspInstanceInfoResponse {
        this['result'] = result;
        return this;
    }
}