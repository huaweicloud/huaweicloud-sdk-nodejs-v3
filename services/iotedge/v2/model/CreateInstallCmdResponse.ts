
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstallCmdResponse extends SdkResponse {
    public cmd?: string;
    public constructor() { 
        super();
    }
    public withCmd(cmd: string): CreateInstallCmdResponse {
        this['cmd'] = cmd;
        return this;
    }
}