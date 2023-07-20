import { Listener } from './Listener';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateListenerResponse extends SdkResponse {
    private 'request_id'?: string;
    public listener?: Listener;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateListenerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withListener(listener: Listener): CreateListenerResponse {
        this['listener'] = listener;
        return this;
    }
}