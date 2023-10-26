
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunCloseVideoStreamModerationJobResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): RunCloseVideoStreamModerationJobResponse {
        this['result'] = result;
        return this;
    }
}