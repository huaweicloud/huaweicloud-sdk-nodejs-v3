import { QueryProxyResponseV3 } from './QueryProxyResponseV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRdSforMySqlProxyResponse extends SdkResponse {
    private 'proxy_query_info_list'?: Array<QueryProxyResponseV3>;
    private 'max_proxy_num'?: number;
    private 'max_proxy_node_num'?: number;
    private 'support_balance_route_mode_for_favored_version'?: boolean;
    public constructor() { 
        super();
    }
    public withProxyQueryInfoList(proxyQueryInfoList: Array<QueryProxyResponseV3>): ListRdSforMySqlProxyResponse {
        this['proxy_query_info_list'] = proxyQueryInfoList;
        return this;
    }
    public set proxyQueryInfoList(proxyQueryInfoList: Array<QueryProxyResponseV3>  | undefined) {
        this['proxy_query_info_list'] = proxyQueryInfoList;
    }
    public get proxyQueryInfoList(): Array<QueryProxyResponseV3> | undefined {
        return this['proxy_query_info_list'];
    }
    public withMaxProxyNum(maxProxyNum: number): ListRdSforMySqlProxyResponse {
        this['max_proxy_num'] = maxProxyNum;
        return this;
    }
    public set maxProxyNum(maxProxyNum: number  | undefined) {
        this['max_proxy_num'] = maxProxyNum;
    }
    public get maxProxyNum(): number | undefined {
        return this['max_proxy_num'];
    }
    public withMaxProxyNodeNum(maxProxyNodeNum: number): ListRdSforMySqlProxyResponse {
        this['max_proxy_node_num'] = maxProxyNodeNum;
        return this;
    }
    public set maxProxyNodeNum(maxProxyNodeNum: number  | undefined) {
        this['max_proxy_node_num'] = maxProxyNodeNum;
    }
    public get maxProxyNodeNum(): number | undefined {
        return this['max_proxy_node_num'];
    }
    public withSupportBalanceRouteModeForFavoredVersion(supportBalanceRouteModeForFavoredVersion: boolean): ListRdSforMySqlProxyResponse {
        this['support_balance_route_mode_for_favored_version'] = supportBalanceRouteModeForFavoredVersion;
        return this;
    }
    public set supportBalanceRouteModeForFavoredVersion(supportBalanceRouteModeForFavoredVersion: boolean  | undefined) {
        this['support_balance_route_mode_for_favored_version'] = supportBalanceRouteModeForFavoredVersion;
    }
    public get supportBalanceRouteModeForFavoredVersion(): boolean | undefined {
        return this['support_balance_route_mode_for_favored_version'];
    }
}