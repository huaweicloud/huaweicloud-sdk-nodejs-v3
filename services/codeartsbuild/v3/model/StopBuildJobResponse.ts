
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopBuildJobResponse extends SdkResponse {
    public success?: boolean;
    public result?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): StopBuildJobResponse {
        this['success'] = success;
        return this;
    }
    public withResult(result: string): StopBuildJobResponse {
        this['result'] = result;
        return this;
    }
}