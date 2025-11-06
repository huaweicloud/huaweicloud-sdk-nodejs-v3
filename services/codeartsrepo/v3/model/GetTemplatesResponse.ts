import { TemplateRepositoryList } from './TemplateRepositoryList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetTemplatesResponse extends SdkResponse {
    public error?: Error;
    public result?: TemplateRepositoryList;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): GetTemplatesResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: TemplateRepositoryList): GetTemplatesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): GetTemplatesResponse {
        this['status'] = status;
        return this;
    }
}