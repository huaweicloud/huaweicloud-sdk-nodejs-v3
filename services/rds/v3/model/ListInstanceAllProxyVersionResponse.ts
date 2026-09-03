import { ProxyEngineVersionInfo } from './ProxyEngineVersionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceAllProxyVersionResponse extends SdkResponse {
    private 'proxy_engine_version_infos'?: Array<ProxyEngineVersionInfo>;
    public constructor() { 
        super();
    }
    public withProxyEngineVersionInfos(proxyEngineVersionInfos: Array<ProxyEngineVersionInfo>): ListInstanceAllProxyVersionResponse {
        this['proxy_engine_version_infos'] = proxyEngineVersionInfos;
        return this;
    }
    public set proxyEngineVersionInfos(proxyEngineVersionInfos: Array<ProxyEngineVersionInfo>  | undefined) {
        this['proxy_engine_version_infos'] = proxyEngineVersionInfos;
    }
    public get proxyEngineVersionInfos(): Array<ProxyEngineVersionInfo> | undefined {
        return this['proxy_engine_version_infos'];
    }
}