import { ListenerResp } from './ListenerResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListListenersResponse extends SdkResponse {
    public listeners?: Array<ListenerResp>;
    public constructor() { 
        super();
    }
    public withListeners(listeners: Array<ListenerResp>): ListListenersResponse {
        this['listeners'] = listeners;
        return this;
    }
}