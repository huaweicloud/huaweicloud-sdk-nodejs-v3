import { ExecuteRecordV2Body } from './ExecuteRecordV2Body';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeployTaskHistoryByDateResponse extends SdkResponse {
    public result?: Array<ExecuteRecordV2Body>;
    private 'total_num'?: number | undefined;
    public constructor() { 
        super();
    }
    public withResult(result: Array<ExecuteRecordV2Body>): ListDeployTaskHistoryByDateResponse {
        this['result'] = result;
        return this;
    }
    public withTotalNum(totalNum: number): ListDeployTaskHistoryByDateResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum() {
        return this['total_num'];
    }
}