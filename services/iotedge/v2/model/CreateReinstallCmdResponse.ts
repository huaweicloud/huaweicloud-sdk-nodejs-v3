
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateReinstallCmdResponse extends SdkResponse {
    public cmd?: string;
    public constructor() { 
        super();
    }
    public withCmd(cmd: string): CreateReinstallCmdResponse {
        this['cmd'] = cmd;
        return this;
    }
}