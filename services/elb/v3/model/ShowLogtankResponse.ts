import { Logtank } from './Logtank';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLogtankResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public logtank?: Logtank;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowLogtankResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withLogtank(logtank: Logtank): ShowLogtankResponse {
        this['logtank'] = logtank;
        return this;
    }
}