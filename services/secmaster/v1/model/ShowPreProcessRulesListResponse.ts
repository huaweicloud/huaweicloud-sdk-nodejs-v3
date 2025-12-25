import { ShowPreProcessRulesListResponseBodyData } from './ShowPreProcessRulesListResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPreProcessRulesListResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public offset?: number;
    public limit?: number;
    public data?: Array<ShowPreProcessRulesListResponseBodyData>;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowPreProcessRulesListResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowPreProcessRulesListResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ShowPreProcessRulesListResponse {
        this['total'] = total;
        return this;
    }
    public withOffset(offset: number): ShowPreProcessRulesListResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowPreProcessRulesListResponse {
        this['limit'] = limit;
        return this;
    }
    public withData(data: Array<ShowPreProcessRulesListResponseBodyData>): ShowPreProcessRulesListResponse {
        this['data'] = data;
        return this;
    }
}