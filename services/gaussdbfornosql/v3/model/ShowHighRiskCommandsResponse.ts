import { CommandInfo } from './CommandInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHighRiskCommandsResponse extends SdkResponse {
    public commands?: Array<CommandInfo>;
    public constructor() { 
        super();
    }
    public withCommands(commands: Array<CommandInfo>): ShowHighRiskCommandsResponse {
        this['commands'] = commands;
        return this;
    }
}