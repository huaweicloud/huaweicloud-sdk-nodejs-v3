import { CommandParam } from './CommandParam';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCommandResponse extends SdkResponse {
    private 'command_name'?: string;
    private 'command_param'?: CommandParam;
    public constructor() { 
        super();
    }
    public withCommandName(commandName: string): ShowCommandResponse {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string  | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName(): string | undefined {
        return this['command_name'];
    }
    public withCommandParam(commandParam: CommandParam): ShowCommandResponse {
        this['command_param'] = commandParam;
        return this;
    }
    public set commandParam(commandParam: CommandParam  | undefined) {
        this['command_param'] = commandParam;
    }
    public get commandParam(): CommandParam | undefined {
        return this['command_param'];
    }
}