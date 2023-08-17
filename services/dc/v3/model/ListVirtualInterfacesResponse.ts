import { PageInfo } from './PageInfo';
import { VirtualInterface } from './VirtualInterface';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVirtualInterfacesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'virtual_interfaces'?: Array<VirtualInterface>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListVirtualInterfacesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withVirtualInterfaces(virtualInterfaces: Array<VirtualInterface>): ListVirtualInterfacesResponse {
        this['virtual_interfaces'] = virtualInterfaces;
        return this;
    }
    public set virtualInterfaces(virtualInterfaces: Array<VirtualInterface>  | undefined) {
        this['virtual_interfaces'] = virtualInterfaces;
    }
    public get virtualInterfaces(): Array<VirtualInterface> | undefined {
        return this['virtual_interfaces'];
    }
    public withPageInfo(pageInfo: PageInfo): ListVirtualInterfacesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}