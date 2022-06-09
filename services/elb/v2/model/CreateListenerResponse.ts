import { ListenerResp } from './ListenerResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateListenerResponse extends SdkResponse {
    public listener?: ListenerResp;
    public constructor() { 
        super();
    }
    public withListener(listener: ListenerResp): CreateListenerResponse {
        this['listener'] = listener;
        return this;
    }
}