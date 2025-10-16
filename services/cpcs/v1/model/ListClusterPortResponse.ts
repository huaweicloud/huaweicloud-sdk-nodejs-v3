import { ElbClusterPortReponseBody } from './ElbClusterPortReponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterPortResponse extends SdkResponse {
    private 'total_num'?: number;
    public result?: Array<ElbClusterPortReponseBody>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListClusterPortResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withResult(result: Array<ElbClusterPortReponseBody>): ListClusterPortResponse {
        this['result'] = result;
        return this;
    }
}