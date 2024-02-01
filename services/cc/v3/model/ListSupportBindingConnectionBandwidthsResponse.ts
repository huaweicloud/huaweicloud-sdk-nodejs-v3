import { GlobalConnectionBandwidth } from './GlobalConnectionBandwidth';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSupportBindingConnectionBandwidthsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'globalconnection_bandwidths'?: Array<GlobalConnectionBandwidth>;
    public constructor(requestId?: string, globalconnectionBandwidths?: Array<GlobalConnectionBandwidth>) { 
        super();
        this['request_id'] = requestId;
        this['globalconnection_bandwidths'] = globalconnectionBandwidths;
    }
    public withRequestId(requestId: string): ListSupportBindingConnectionBandwidthsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListSupportBindingConnectionBandwidthsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withGlobalconnectionBandwidths(globalconnectionBandwidths: Array<GlobalConnectionBandwidth>): ListSupportBindingConnectionBandwidthsResponse {
        this['globalconnection_bandwidths'] = globalconnectionBandwidths;
        return this;
    }
    public set globalconnectionBandwidths(globalconnectionBandwidths: Array<GlobalConnectionBandwidth>  | undefined) {
        this['globalconnection_bandwidths'] = globalconnectionBandwidths;
    }
    public get globalconnectionBandwidths(): Array<GlobalConnectionBandwidth> | undefined {
        return this['globalconnection_bandwidths'];
    }
}