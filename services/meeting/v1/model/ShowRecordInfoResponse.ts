import { RecordInfoDO } from './RecordInfoDO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecordInfoResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: RecordInfoDO;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowRecordInfoResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowRecordInfoResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: RecordInfoDO): ShowRecordInfoResponse {
        this['data'] = data;
        return this;
    }
}