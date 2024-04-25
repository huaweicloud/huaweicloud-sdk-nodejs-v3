
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricsDataResponse extends SdkResponse {
    public code?: number;
    public msg?: string;
    public data?: Array<{ [key: string]: object; }>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withCode(code: number): ListMetricsDataResponse {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): ListMetricsDataResponse {
        this['msg'] = msg;
        return this;
    }
    public withData(data: Array<{ [key: string]: object; }>): ListMetricsDataResponse {
        this['data'] = data;
        return this;
    }
    public withCount(count: number): ListMetricsDataResponse {
        this['count'] = count;
        return this;
    }
}