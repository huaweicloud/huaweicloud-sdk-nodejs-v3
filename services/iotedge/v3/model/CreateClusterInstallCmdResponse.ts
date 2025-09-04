
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterInstallCmdResponse extends SdkResponse {
    public cmd?: string;
    public constructor() { 
        super();
    }
    public withCmd(cmd: string): CreateClusterInstallCmdResponse {
        this['cmd'] = cmd;
        return this;
    }
}