import { TemplateRepositoryList } from './TemplateRepositoryList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTwoTemplatesResponse extends SdkResponse {
    public error?: Error;
    public result?: TemplateRepositoryList;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListTwoTemplatesResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: TemplateRepositoryList): ListTwoTemplatesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListTwoTemplatesResponse {
        this['status'] = status;
        return this;
    }
}