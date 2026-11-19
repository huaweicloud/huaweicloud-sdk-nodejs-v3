
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaurusDbSlowProcessThresholdResponse extends SdkResponse {
    private 'slow_process_threshold'?: number;
    public constructor() { 
        super();
    }
    public withSlowProcessThreshold(slowProcessThreshold: number): ShowTaurusDbSlowProcessThresholdResponse {
        this['slow_process_threshold'] = slowProcessThreshold;
        return this;
    }
    public set slowProcessThreshold(slowProcessThreshold: number  | undefined) {
        this['slow_process_threshold'] = slowProcessThreshold;
    }
    public get slowProcessThreshold(): number | undefined {
        return this['slow_process_threshold'];
    }
}