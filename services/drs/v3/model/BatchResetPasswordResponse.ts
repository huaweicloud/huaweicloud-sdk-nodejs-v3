import { ModifyDbPwdResp } from './ModifyDbPwdResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchResetPasswordResponse extends SdkResponse {
    public results?: Array<ModifyDbPwdResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<ModifyDbPwdResp>): BatchResetPasswordResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchResetPasswordResponse {
        this['count'] = count;
        return this;
    }
}