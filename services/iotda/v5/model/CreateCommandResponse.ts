
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCommandResponse extends SdkResponse {
    private 'command_id'?: string | undefined;
    public response?: object;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: object | undefined;
    public constructor() { 
        super();
    }
    public withCommandId(commandId: string): CreateCommandResponse {
        this['command_id'] = commandId;
        return this;
    }
    public set commandId(commandId: string | undefined) {
        this['command_id'] = commandId;
    }
    public get commandId() {
        return this['command_id'];
    }
    public withResponse(response: object): CreateCommandResponse {
        this['response'] = response;
        return this;
    }
    public withErrorCode(errorCode: string): CreateCommandResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: object): CreateCommandResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: object | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
}