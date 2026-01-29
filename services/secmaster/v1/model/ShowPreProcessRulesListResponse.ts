import { ShowPreProcessRulesListResponseBodyData } from './ShowPreProcessRulesListResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPreProcessRulesListResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public size?: number;
    public page?: number;
    public total?: number;
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
    public withSize(size: number): ShowPreProcessRulesListResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ShowPreProcessRulesListResponse {
        this['page'] = page;
        return this;
    }
    public withTotal(total: number): ShowPreProcessRulesListResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<ShowPreProcessRulesListResponseBodyData>): ShowPreProcessRulesListResponse {
        this['data'] = data;
        return this;
    }
}