import { ProxyIpGroupDetail } from './ProxyIpGroupDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProxyIpgroupResponse extends SdkResponse {
    private 'enable_ip_group'?: boolean;
    public type?: string;
    private 'ip_group'?: ProxyIpGroupDetail;
    public constructor() { 
        super();
    }
    public withEnableIpGroup(enableIpGroup: boolean): ShowProxyIpgroupResponse {
        this['enable_ip_group'] = enableIpGroup;
        return this;
    }
    public set enableIpGroup(enableIpGroup: boolean  | undefined) {
        this['enable_ip_group'] = enableIpGroup;
    }
    public get enableIpGroup(): boolean | undefined {
        return this['enable_ip_group'];
    }
    public withType(type: string): ShowProxyIpgroupResponse {
        this['type'] = type;
        return this;
    }
    public withIpGroup(ipGroup: ProxyIpGroupDetail): ShowProxyIpgroupResponse {
        this['ip_group'] = ipGroup;
        return this;
    }
    public set ipGroup(ipGroup: ProxyIpGroupDetail  | undefined) {
        this['ip_group'] = ipGroup;
    }
    public get ipGroup(): ProxyIpGroupDetail | undefined {
        return this['ip_group'];
    }
}