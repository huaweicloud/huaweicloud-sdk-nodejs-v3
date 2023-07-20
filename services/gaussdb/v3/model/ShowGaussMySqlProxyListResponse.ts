import { MysqlShowProxyResponseV3 } from './MysqlShowProxyResponseV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGaussMySqlProxyListResponse extends SdkResponse {
    private 'proxy_list'?: Array<MysqlShowProxyResponseV3>;
    public constructor() { 
        super();
    }
    public withProxyList(proxyList: Array<MysqlShowProxyResponseV3>): ShowGaussMySqlProxyListResponse {
        this['proxy_list'] = proxyList;
        return this;
    }
    public set proxyList(proxyList: Array<MysqlShowProxyResponseV3>  | undefined) {
        this['proxy_list'] = proxyList;
    }
    public get proxyList(): Array<MysqlShowProxyResponseV3> | undefined {
        return this['proxy_list'];
    }
}