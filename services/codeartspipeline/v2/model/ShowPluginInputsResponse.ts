import { PluginPartQueryVOListAgentPluginInputVO } from './PluginPartQueryVOListAgentPluginInputVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPluginInputsResponse extends SdkResponse {
    public body?: Array<PluginPartQueryVOListAgentPluginInputVO>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PluginPartQueryVOListAgentPluginInputVO>): ShowPluginInputsResponse {
        this['body'] = body;
        return this;
    }
}