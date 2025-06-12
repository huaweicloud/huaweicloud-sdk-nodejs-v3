import { QueryCustomTemplatesResult } from './QueryCustomTemplatesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomTemplateResponse extends SdkResponse {
    public result?: QueryCustomTemplatesResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: QueryCustomTemplatesResult): ListCustomTemplateResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListCustomTemplateResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListCustomTemplateResponse {
        this['status'] = status;
        return this;
    }
}