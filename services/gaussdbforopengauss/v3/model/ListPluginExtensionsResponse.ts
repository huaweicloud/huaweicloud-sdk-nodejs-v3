import { PluginExtensions } from './PluginExtensions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginExtensionsResponse extends SdkResponse {
    public body?: Array<PluginExtensions>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PluginExtensions>): ListPluginExtensionsResponse {
        this['body'] = body;
        return this;
    }
}