import { Logtank } from './Logtank';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLogtankResponse extends SdkResponse {
    public logtank?: Logtank;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withLogtank(logtank: Logtank): CreateLogtankResponse {
        this['logtank'] = logtank;
        return this;
    }
    public withRequestId(requestId: string): CreateLogtankResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}