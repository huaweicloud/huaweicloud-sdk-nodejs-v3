import { PluginPartQueryVOListAgentPluginOutputVO } from './PluginPartQueryVOListAgentPluginOutputVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPluginMetricsResponse extends SdkResponse {
    public body?: Array<PluginPartQueryVOListAgentPluginOutputVO>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PluginPartQueryVOListAgentPluginOutputVO>): ShowPluginMetricsResponse {
        this['body'] = body;
        return this;
    }
}