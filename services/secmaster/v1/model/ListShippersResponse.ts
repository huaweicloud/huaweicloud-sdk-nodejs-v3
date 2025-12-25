import { ApiResponseData } from './ApiResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListShippersResponse extends SdkResponse {
    public code?: number;
    public data?: ApiResponseData;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withCode(code: number): ListShippersResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: ApiResponseData): ListShippersResponse {
        this['data'] = data;
        return this;
    }
    public withMsg(msg: string): ListShippersResponse {
        this['msg'] = msg;
        return this;
    }
}