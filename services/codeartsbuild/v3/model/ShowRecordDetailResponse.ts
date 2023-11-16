import { RecordInfo2Result } from './RecordInfo2Result';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecordDetailResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: RecordInfo2Result;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowRecordDetailResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ShowRecordDetailResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RecordInfo2Result): ShowRecordDetailResponse {
        this['result'] = result;
        return this;
    }
}