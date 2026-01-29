import { DpeMappingContent } from './DpeMappingContent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMapperListResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public size?: number;
    public page?: number;
    public total?: number;
    public data?: Array<DpeMappingContent>;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowMapperListResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowMapperListResponse {
        this['message'] = message;
        return this;
    }
    public withSize(size: number): ShowMapperListResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ShowMapperListResponse {
        this['page'] = page;
        return this;
    }
    public withTotal(total: number): ShowMapperListResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<DpeMappingContent>): ShowMapperListResponse {
        this['data'] = data;
        return this;
    }
}