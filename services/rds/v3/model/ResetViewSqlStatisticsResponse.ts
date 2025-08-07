
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetViewSqlStatisticsResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): ResetViewSqlStatisticsResponse {
        this['resp'] = resp;
        return this;
    }
}