import { PluginPartQueryVOListAgentPluginOutputVO } from './PluginPartQueryVOListAgentPluginOutputVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPluginOutputsResponse extends SdkResponse {
    public body?: Array<PluginPartQueryVOListAgentPluginOutputVO>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PluginPartQueryVOListAgentPluginOutputVO>): ShowPluginOutputsResponse {
        this['body'] = body;
        return this;
    }
}