import { QueryJobNoticeItems } from './QueryJobNoticeItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobNoticeConfigInfoResponse extends SdkResponse {
    public result?: Array<QueryJobNoticeItems>;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<QueryJobNoticeItems>): ShowJobNoticeConfigInfoResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowJobNoticeConfigInfoResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowJobNoticeConfigInfoResponse {
        this['status'] = status;
        return this;
    }
}