
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteSmartLiveCommandResponse extends SdkResponse {
    public command?: ExecuteSmartLiveCommandResponseCommandEnum | string;
    public result?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCommand(command: ExecuteSmartLiveCommandResponseCommandEnum | string): ExecuteSmartLiveCommandResponse {
        this['command'] = command;
        return this;
    }
    public withResult(result: string): ExecuteSmartLiveCommandResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): ExecuteSmartLiveCommandResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum ExecuteSmartLiveCommandResponseCommandEnum {
    INSERT_PLAY_SCRIPT = 'INSERT_PLAY_SCRIPT',
    REWRITE_PLAY_SCRIPT = 'REWRITE_PLAY_SCRIPT',
    INSERT_PLAY_AUDIO = 'INSERT_PLAY_AUDIO',
    GET_CURRENT_PLAYING_SCRIPTS = 'GET_CURRENT_PLAYING_SCRIPTS'
}
