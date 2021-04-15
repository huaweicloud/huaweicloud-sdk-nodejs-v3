import { PageInfo } from './PageInfo';
import { SubNetworkInterface } from './SubNetworkInterface';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubNetworkInterfacesResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'sub_network_interfaces'?: Array<SubNetworkInterface> | undefined;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListSubNetworkInterfacesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withSubNetworkInterfaces(subNetworkInterfaces: Array<SubNetworkInterface>): ListSubNetworkInterfacesResponse {
        this['sub_network_interfaces'] = subNetworkInterfaces;
        return this;
    }
    public set subNetworkInterfaces(subNetworkInterfaces: Array<SubNetworkInterface> | undefined) {
        this['sub_network_interfaces'] = subNetworkInterfaces;
    }
    public get subNetworkInterfaces() {
        return this['sub_network_interfaces'];
    }
    public withPageInfo(pageInfo: PageInfo): ListSubNetworkInterfacesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}