import { ListenerDetail } from './ListenerDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowListenerResponse extends SdkResponse {
    public listener?: ListenerDetail;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withListener(listener: ListenerDetail): ShowListenerResponse {
        this['listener'] = listener;
        return this;
    }
    public withRequestId(requestId: string): ShowListenerResponse {
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