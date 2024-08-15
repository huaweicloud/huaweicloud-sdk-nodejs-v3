
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class OperateScriptJobResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): OperateScriptJobResponse {
        this['data'] = data;
        return this;
    }
}