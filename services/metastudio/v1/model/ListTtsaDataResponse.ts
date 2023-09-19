import { AnimationItem } from './AnimationItem';
import { MotionItem } from './MotionItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTtsaDataResponse extends SdkResponse {
    public jobId?: string;
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