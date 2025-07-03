
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SaveMonitorItemConfigResponse extends SdkResponse {
    public flag?: string;
    public constructor() { 
        super();
    }
    public withFlag(flag: string): SaveMonitorItemConfigResponse {
        this['flag'] = flag;
        return this;
    }
}