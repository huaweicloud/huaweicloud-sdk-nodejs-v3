import { MysqlProxyFlavorGroups } from './MysqlProxyFlavorGroups';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGaussMySqlProxyFlavorsResponse extends SdkResponse {
    private 'proxy_flavor_groups'?: Array<MysqlProxyFlavorGroups>;
    public constructor() { 
        super();
    }
    public withProxyFlavorGroups(proxyFlavorGroups: Array<MysqlProxyFlavorGroups>): ShowGaussMySqlProxyFlavorsResponse {
        this['proxy_flavor_groups'] = proxyFlavorGroups;
        return this;
    }
    public set proxyFlavorGroups(proxyFlavorGroups: Array<MysqlProxyFlavorGroups>  | undefined) {
        this['proxy_flavor_groups'] = proxyFlavorGroups;
    }
    public get proxyFlavorGroups(): Array<MysqlProxyFlavorGroups> | undefined {
        return this['proxy_flavor_groups'];
    }
}