import { StepDetail } from './StepDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackgroundTaskProgressResponse extends SdkResponse {
    private 'progress_percentage'?: number;
    private 'remain_time'?: number;
    private 'step_list'?: Array<StepDetail>;
    public constructor() { 
        super();
    }
    public withProgressPercentage(progressPercentage: number): ShowBackgroundTaskProgressResponse {
        this['progress_percentage'] = progressPercentage;
        return this;
    }
    public set progressPercentage(progressPercentage: number  | undefined) {
        this['progress_percentage'] = progressPercentage;
    }
    public get progressPercentage(): number | undefined {
        return this['progress_percentage'];
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
    public withStepList(stepList: Array<StepDetail>): ShowBackgroundTaskProgressResponse {
        this['step_list'] = stepList;
        return this;
    }
    public set stepList(stepList: Array<StepDetail>  | undefined) {
        this['step_list'] = stepList;
    }
    public get stepList(): Array<StepDetail> | undefined {
        return this['step_list'];
    }
}