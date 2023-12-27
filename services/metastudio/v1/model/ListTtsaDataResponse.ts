import { AnimationItem } from './AnimationItem';
import { MotionItem } from './MotionItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTtsaDataResponse extends SdkResponse {
    public jobId?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'is_tail'?: boolean;
    public audio?: string;
    public blendshapes?: Array<string>;
    public animations?: Array<AnimationItem>;
    public motions?: Array<MotionItem>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ListTtsaDataResponse {
        this['jobId'] = jobId;
        return this;
    }
    public withStartTime(startTime: string): ListTtsaDataResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListTtsaDataResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withIsTail(isTail: boolean): ListTtsaDataResponse {
        this['is_tail'] = isTail;
        return this;
    }
    public set isTail(isTail: boolean  | undefined) {
        this['is_tail'] = isTail;
    }
    public get isTail(): boolean | undefined {
        return this['is_tail'];
    }
    public withAudio(audio: string): ListTtsaDataResponse {
        this['audio'] = audio;
        return this;
    }
    public withBlendshapes(blendshapes: Array<string>): ListTtsaDataResponse {
        this['blendshapes'] = blendshapes;
        return this;
    }
    public withAnimations(animations: Array<AnimationItem>): ListTtsaDataResponse {
        this['animations'] = animations;
        return this;
    }
    public withMotions(motions: Array<MotionItem>): ListTtsaDataResponse {
        this['motions'] = motions;
        return this;
    }
    public withXRequestId(xRequestId: string): ListTtsaDataResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}