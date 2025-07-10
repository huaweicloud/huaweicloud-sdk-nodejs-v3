import { TemplateListInfo } from './TemplateListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetProductTemplatesResponse extends SdkResponse {
    public error?: Error;
    public result?: TemplateListInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): GetProductTemplatesResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: TemplateListInfo): GetProductTemplatesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): GetProductTemplatesResponse {
        this['status'] = status;
        return this;
    }
}