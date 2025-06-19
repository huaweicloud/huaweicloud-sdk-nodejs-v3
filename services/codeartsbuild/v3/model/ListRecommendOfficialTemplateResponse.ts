import { QueryTemplatesResult } from './QueryTemplatesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecommendOfficialTemplateResponse extends SdkResponse {
    public result?: QueryTemplatesResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: QueryTemplatesResult): ListRecommendOfficialTemplateResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListRecommendOfficialTemplateResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListRecommendOfficialTemplateResponse {
        this['status'] = status;
        return this;
    }
}