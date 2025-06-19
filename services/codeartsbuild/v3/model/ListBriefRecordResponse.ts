import { ListBriefRecordResponseBodyResult } from './ListBriefRecordResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBriefRecordResponse extends SdkResponse {
    public result?: Array<ListBriefRecordResponseBodyResult>;
    public error?: object;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<ListBriefRecordResponseBodyResult>): ListBriefRecordResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: object): ListBriefRecordResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListBriefRecordResponse {
        this['status'] = status;
        return this;
    }
}