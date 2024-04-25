import { Page } from './Page';
import { QueryDeviceProxySimplify } from './QueryDeviceProxySimplify';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeviceProxiesResponse extends SdkResponse {
    private 'device_proxies'?: Array<QueryDeviceProxySimplify>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withDeviceProxies(deviceProxies: Array<QueryDeviceProxySimplify>): ListDeviceProxiesResponse {
        this['device_proxies'] = deviceProxies;
        return this;
    }
    public set deviceProxies(deviceProxies: Array<QueryDeviceProxySimplify>  | undefined) {
        this['device_proxies'] = deviceProxies;
    }
    public get deviceProxies(): Array<QueryDeviceProxySimplify> | undefined {
        return this['device_proxies'];
    }
    public withPage(page: Page): ListDeviceProxiesResponse {
        this['page'] = page;
        return this;
    }
}