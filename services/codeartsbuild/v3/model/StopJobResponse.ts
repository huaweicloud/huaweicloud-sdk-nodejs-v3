
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopJobResponse extends SdkResponse {
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): StopJobResponse {
        this['result'] = result;
        return this;
    }
}