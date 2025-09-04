import { JobGroupTreeResponseBody } from './JobGroupTreeResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupTreeResponse extends SdkResponse {
    public result?: Array<JobGroupTreeResponseBody>;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<JobGroupTreeResponseBody>): ListGroupTreeResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListGroupTreeResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListGroupTreeResponse {
        this['status'] = status;
        return this;
    }
}