import { ProxyFlavorGroup } from './ProxyFlavorGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProxyFlavorsByAzCodeResponse extends SdkResponse {
    private 'proxy_flavor_groups'?: Array<ProxyFlavorGroup>;
    public constructor() { 
        super();
    }
    public withProxyFlavorGroups(proxyFlavorGroups: Array<ProxyFlavorGroup>): ShowProxyFlavorsByAzCodeResponse {
        this['proxy_flavor_groups'] = proxyFlavorGroups;
        return this;
    }
    public set proxyFlavorGroups(proxyFlavorGroups: Array<ProxyFlavorGroup>  | undefined) {
        this['proxy_flavor_groups'] = proxyFlavorGroups;
    }
    public get proxyFlavorGroups(): Array<ProxyFlavorGroup> | undefined {
        return this['proxy_flavor_groups'];
    }
}