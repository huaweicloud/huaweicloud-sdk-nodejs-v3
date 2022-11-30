import { RunModerationAudioResponseBodyResult } from './RunModerationAudioResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunModerationAudioResponse extends SdkResponse {
    public result?: RunModerationAudioResponseBodyResult;
    public constructor() { 
        super();
    }
    public withResult(result: RunModerationAudioResponseBodyResult): RunModerationAudioResponse {
        this['result'] = result;
        return this;
    }
}