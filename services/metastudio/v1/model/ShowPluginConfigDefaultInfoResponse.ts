import { DefaultPluginInfo } from './DefaultPluginInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPluginConfigDefaultInfoResponse extends SdkResponse {
    private 'default_plugin_list'?: Array<DefaultPluginInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withDefaultPluginList(defaultPluginList: Array<DefaultPluginInfo>): ShowPluginConfigDefaultInfoResponse {
        this['default_plugin_list'] = defaultPluginList;
        return this;
    }
    public set defaultPluginList(defaultPluginList: Array<DefaultPluginInfo>  | undefined) {
        this['default_plugin_list'] = defaultPluginList;
    }
    public get defaultPluginList(): Array<DefaultPluginInfo> | undefined {
        return this['default_plugin_list'];
    }
    public withXRequestId(xRequestId: string): ShowPluginConfigDefaultInfoResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}