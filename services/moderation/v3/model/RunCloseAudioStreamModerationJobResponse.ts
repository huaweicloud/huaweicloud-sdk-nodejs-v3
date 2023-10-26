
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunCloseAudioStreamModerationJobResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): RunCloseAudioStreamModerationJobResponse {
        this['result'] = result;
        return this;
    }
}