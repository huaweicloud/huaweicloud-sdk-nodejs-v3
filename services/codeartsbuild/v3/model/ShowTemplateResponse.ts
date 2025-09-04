import { QueryTemplatesItems } from './QueryTemplatesItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateResponse extends SdkResponse {
    public result?: QueryTemplatesItems;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: QueryTemplatesItems): ShowTemplateResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowTemplateResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowTemplateResponse {
        this['status'] = status;
        return this;
    }
}