import { LogtankDetail } from './LogtankDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLogtankResponse extends SdkResponse {
    public logtank?: LogtankDetail;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withLogtank(logtank: LogtankDetail): CreateLogtankResponse {
        this['logtank'] = logtank;
        return this;
    }
    public withRequestId(requestId: string): CreateLogtankResponse {
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