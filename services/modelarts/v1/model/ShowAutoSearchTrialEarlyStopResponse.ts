
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoSearchTrialEarlyStopResponse extends SdkResponse {
    private 'earlystop_trial'?: string;
    public constructor() { 
        super();
    }
    public withEarlystopTrial(earlystopTrial: string): ShowAutoSearchTrialEarlyStopResponse {
        this['earlystop_trial'] = earlystopTrial;
        return this;
    }
    public set earlystopTrial(earlystopTrial: string  | undefined) {
        this['earlystop_trial'] = earlystopTrial;
    }
    public get earlystopTrial(): string | undefined {
        return this['earlystop_trial'];
    }
}