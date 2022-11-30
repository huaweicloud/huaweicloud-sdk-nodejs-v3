import { ListenerResp } from './ListenerResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowListenerResponse extends SdkResponse {
    public listener?: ListenerResp;
    public constructor() { 
        super();
    }
    public withListener(listener: ListenerResp): ShowListenerResponse {
        this['listener'] = listener;
        return this;
    }
}