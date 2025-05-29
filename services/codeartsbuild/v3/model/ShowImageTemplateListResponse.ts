import { ShowImageTemplateListResponseBodyResult } from './ShowImageTemplateListResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageTemplateListResponse extends SdkResponse {
    public result?: ShowImageTemplateListResponseBodyResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ShowImageTemplateListResponseBodyResult): ShowImageTemplateListResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowImageTemplateListResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowImageTemplateListResponse {
        this['status'] = status;
        return this;
    }
}