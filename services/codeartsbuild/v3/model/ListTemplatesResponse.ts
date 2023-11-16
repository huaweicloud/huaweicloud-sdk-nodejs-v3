import { QueryTemplatesResult } from './QueryTemplatesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesResponse extends SdkResponse {
    public result?: Array<QueryTemplatesResult>;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<QueryTemplatesResult>): ListTemplatesResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListTemplatesResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListTemplatesResponse {
        this['status'] = status;
        return this;
    }
}