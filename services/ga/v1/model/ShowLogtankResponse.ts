import { LogtankDetail } from './LogtankDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLogtankResponse extends SdkResponse {
    public logtank?: LogtankDetail;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withLogtank(logtank: LogtankDetail): ShowLogtankResponse {
        this['logtank'] = logtank;
        return this;
    }
    public withRequestId(requestId: string): ShowLogtankResponse {
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