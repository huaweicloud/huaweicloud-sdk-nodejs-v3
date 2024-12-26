import { ScriptCommand } from './ScriptCommand';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSmartLiveScriptCommandsResponse extends SdkResponse {
    public count?: number;
    private 'scripts_commands'?: Array<ScriptCommand>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSmartLiveScriptCommandsResponse {
        this['count'] = count;
        return this;
    }
    public withScriptsCommands(scriptsCommands: Array<ScriptCommand>): ListSmartLiveScriptCommandsResponse {
        this['scripts_commands'] = scriptsCommands;
        return this;
    }
    public set scriptsCommands(scriptsCommands: Array<ScriptCommand>  | undefined) {
        this['scripts_commands'] = scriptsCommands;
    }
    public get scriptsCommands(): Array<ScriptCommand> | undefined {
        return this['scripts_commands'];
    }
    public withXRequestId(xRequestId: string): ListSmartLiveScriptCommandsResponse {
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