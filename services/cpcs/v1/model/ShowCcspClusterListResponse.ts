import { CcspClusterInfo } from './CcspClusterInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCcspClusterListResponse extends SdkResponse {
    private 'total_num'?: number;
    public result?: Array<CcspClusterInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowCcspClusterListResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withResult(result: Array<CcspClusterInfo>): ShowCcspClusterListResponse {
        this['result'] = result;
        return this;
    }
}