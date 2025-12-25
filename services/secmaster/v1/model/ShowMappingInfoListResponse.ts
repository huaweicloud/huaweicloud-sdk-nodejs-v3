import { DpeInfo } from './DpeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMappingInfoListResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public offset?: number;
    public limit?: number;
    public data?: Array<DpeInfo>;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowMappingInfoListResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowMappingInfoListResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ShowMappingInfoListResponse {
        this['total'] = total;
        return this;
    }
    public withOffset(offset: number): ShowMappingInfoListResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowMappingInfoListResponse {
        this['limit'] = limit;
        return this;
    }
    public withData(data: Array<DpeInfo>): ShowMappingInfoListResponse {
        this['data'] = data;
        return this;
    }
}