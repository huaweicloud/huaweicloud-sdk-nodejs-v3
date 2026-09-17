
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUpgradeCmdResponse extends SdkResponse {
    public cmd?: string;
    public constructor() { 
        super();
    }
    public withCmd(cmd: string): CreateUpgradeCmdResponse {
        this['cmd'] = cmd;
        return this;
    }
}