import { AdviceResult } from './AdviceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTuningResponse extends SdkResponse {
    private 'tune_result'?: AdviceResult;
    public constructor() { 
        super();
    }
    public withTuneResult(tuneResult: AdviceResult): ShowTuningResponse {
        this['tune_result'] = tuneResult;
        return this;
    }
    public set tuneResult(tuneResult: AdviceResult  | undefined) {
        this['tune_result'] = tuneResult;
    }
    public get tuneResult(): AdviceResult | undefined {
        return this['tune_result'];
    }
}