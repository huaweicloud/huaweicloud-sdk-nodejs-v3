import { ListenerRef } from './ListenerRef';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpGroupRelatedListenersResponse extends SdkResponse {
    public listeners?: Array<ListenerRef>;
    public constructor() { 
        super();
    }
    public withListeners(listeners: Array<ListenerRef>): ShowIpGroupRelatedListenersResponse {
        this['listeners'] = listeners;
        return this;
    }
}