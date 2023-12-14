import { ListQueriesDto } from './ListQueriesDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQueryDetailResponse extends SdkResponse {
    public code?: number;
    public msg?: string;
    public data?: ListQueriesDto;
    public constructor() { 
        super();
    }
    public withCode(code: number): ShowQueryDetailResponse {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): ShowQueryDetailResponse {
        this['msg'] = msg;
        return this;
    }
    public withData(data: ListQueriesDto): ShowQueryDetailResponse {
        this['data'] = data;
        return this;
    }
}