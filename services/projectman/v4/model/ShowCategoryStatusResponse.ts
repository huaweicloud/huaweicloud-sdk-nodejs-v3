import { StatusResponseResult } from './StatusResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCategoryStatusResponse extends SdkResponse {
    public total?: number;
    public result?: StatusResponseResult;
    public status?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowCategoryStatusResponse {
        this['total'] = total;
        return this;
    }
    public withResult(result: StatusResponseResult): ShowCategoryStatusResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowCategoryStatusResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ShowCategoryStatusResponse {
        this['message'] = message;
        return this;
    }
}