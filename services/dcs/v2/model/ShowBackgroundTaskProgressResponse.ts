import { StepDetail } from './StepDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackgroundTaskProgressResponse extends SdkResponse {
    public progress?: number;
    private 'remain_time'?: number;
    private 'step_details'?: Array<StepDetail>;
    public constructor() { 
        super();
    }
    public withProgress(progress: number): ShowBackgroundTaskProgressResponse {
        this['progress'] = progress;
        return this;
    }
    public withRemainTime(remainTime: number): ShowBackgroundTaskProgressResponse {
        this['remain_time'] = remainTime;
        return this;
    }
    public set remainTime(remainTime: number  | undefined) {
        this['remain_time'] = remainTime;
    }
    public get remainTime(): number | undefined {
        return this['remain_time'];
    }
    public withStepDetails(stepDetails: Array<StepDetail>): ShowBackgroundTaskProgressResponse {
        this['step_details'] = stepDetails;
        return this;
    }
    public set stepDetails(stepDetails: Array<StepDetail>  | undefined) {
        this['step_details'] = stepDetails;
    }
    public get stepDetails(): Array<StepDetail> | undefined {
        return this['step_details'];
    }
}