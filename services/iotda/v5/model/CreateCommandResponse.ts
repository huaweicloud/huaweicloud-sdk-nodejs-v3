
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCommandResponse extends SdkResponse {
    private 'command_id'?: string | undefined;
    public response?: object;
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
}