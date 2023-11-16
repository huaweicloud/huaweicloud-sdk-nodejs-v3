import { QueryJobNoticeItems } from './QueryJobNoticeItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNoticeResponse extends SdkResponse {
    public result?: Array<QueryJobNoticeItems>;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<QueryJobNoticeItems>): ListNoticeResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListNoticeResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListNoticeResponse {
        this['status'] = status;
        return this;
    }
}