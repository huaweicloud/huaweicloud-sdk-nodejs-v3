import { DpeInfo } from './DpeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMappingInfoListResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public size?: number;
    public page?: number;
    public total?: number;
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
    public withSize(size: number): ShowMappingInfoListResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ShowMappingInfoListResponse {
        this['page'] = page;
        return this;
    }
    public withTotal(total: number): ShowMappingInfoListResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<DpeInfo>): ShowMappingInfoListResponse {
        this['data'] = data;
        return this;
    }
}