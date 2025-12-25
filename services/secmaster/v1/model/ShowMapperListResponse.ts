import { DpeMappingContent } from './DpeMappingContent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMapperListResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public offset?: number;
    public limit?: number;
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
    public withTotal(total: number): ShowMapperListResponse {
        this['total'] = total;
        return this;
    }
    public withOffset(offset: number): ShowMapperListResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowMapperListResponse {
        this['limit'] = limit;
        return this;
    }
    public withData(data: Array<DpeMappingContent>): ShowMapperListResponse {
        this['data'] = data;
        return this;
    }
}