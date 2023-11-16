
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteInstanceIpRuleResponse extends SdkResponse {
    private 'success_num'?: number;
    public constructor() { 
        super();
    }
    public withSuccessNum(successNum: number): BatchDeleteInstanceIpRuleResponse {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
}