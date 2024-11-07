import { LogtankDetail } from './LogtankDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLogtankResponse extends SdkResponse {
    public logtank?: LogtankDetail;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withLogtank(logtank: LogtankDetail): UpdateLogtankResponse {
        this['logtank'] = logtank;
        return this;
    }
    public withRequestId(requestId: string): UpdateLogtankResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}