
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterNodesInstallCmdResponse extends SdkResponse {
    public cmd?: string;
    public constructor() { 
        super();
    }
    public withCmd(cmd: string): CreateClusterNodesInstallCmdResponse {
        this['cmd'] = cmd;
        return this;
    }
}