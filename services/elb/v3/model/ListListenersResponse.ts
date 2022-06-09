import { Listener } from './Listener';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListListenersResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'page_info'?: PageInfo | undefined;
    public listeners?: Array<Listener>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListListenersResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListListenersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withListeners(listeners: Array<Listener>): ListListenersResponse {
        this['listeners'] = listeners;
        return this;
    }
}