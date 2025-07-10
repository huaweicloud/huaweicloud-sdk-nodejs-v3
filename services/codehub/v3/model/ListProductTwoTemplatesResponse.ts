import { TemplateListInfo } from './TemplateListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProductTwoTemplatesResponse extends SdkResponse {
    public error?: Error;
    public result?: TemplateListInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListProductTwoTemplatesResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: TemplateListInfo): ListProductTwoTemplatesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListProductTwoTemplatesResponse {
        this['status'] = status;
        return this;
    }
}