
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRegistryStatisticsResponse extends SdkResponse {
    private 'fail_num'?: number;
    private 'success_num'?: number;
    public constructor() { 
        super();
    }
    public withFailNum(failNum: number): ListRegistryStatisticsResponse {
        this['fail_num'] = failNum;
        return this;
    }
    public set failNum(failNum: number  | undefined) {
        this['fail_num'] = failNum;
    }
    public get failNum(): number | undefined {
        return this['fail_num'];
    }
    public withSuccessNum(successNum: number): ListRegistryStatisticsResponse {
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