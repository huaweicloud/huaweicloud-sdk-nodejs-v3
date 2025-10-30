
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageSecurityReportStatisticResponse extends SdkResponse {
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowImageSecurityReportStatisticResponse {
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