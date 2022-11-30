import { ListenerResp } from './ListenerResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateListenerResponse extends SdkResponse {
    public listener?: ListenerResp;
    public constructor() { 
        super();
    }
    public withListener(listener: ListenerResp): UpdateListenerResponse {
        this['listener'] = listener;
        return this;
    }
}