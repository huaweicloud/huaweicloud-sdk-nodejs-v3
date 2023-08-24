import { InputInfo } from './InputInfo';
import { OutputInfo } from './OutputInfo';
import { VideoMotionCaptureJobReq } from './VideoMotionCaptureJobReq';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVideoMotionCaptureJobResponse extends SdkResponse {
    private 'motion_capture_mode'?: ShowVideoMotionCaptureJobResponseMotionCaptureModeEnum | string;
    private 'input_info'?: InputInfo;
    private 'output_info'?: OutputInfo;
    private 'job_id'?: string;
    public state?: ShowVideoMotionCaptureJobResponseStateEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
        super();
    }
    public withMotionCaptureMode(motionCaptureMode: ShowVideoMotionCaptureJobResponseMotionCaptureModeEnum | string): ShowVideoMotionCaptureJobResponse {
        this['motion_capture_mode'] = motionCaptureMode;
        return this;
    }
    public set motionCaptureMode(motionCaptureMode: ShowVideoMotionCaptureJobResponseMotionCaptureModeEnum | string  | undefined) {
        this['motion_capture_mode'] = motionCaptureMode;
    }
    public get motionCaptureMode(): ShowVideoMotionCaptureJobResponseMotionCaptureModeEnum | string | undefined {
        return this['motion_capture_mode'];
    }
    public withInputInfo(inputInfo: InputInfo): ShowVideoMotionCaptureJobResponse {
        this['input_info'] = inputInfo;
        return this;
    }
    public set inputInfo(inputInfo: InputInfo  | undefined) {
        this['input_info'] = inputInfo;
    }
    public get inputInfo(): InputInfo | undefined {
        return this['input_info'];
    }
    public withOutputInfo(outputInfo: OutputInfo): ShowVideoMotionCaptureJobResponse {
        this['output_info'] = outputInfo;
        return this;
    }
    public set outputInfo(outputInfo: OutputInfo  | undefined) {
        this['output_info'] = outputInfo;
    }
    public get outputInfo(): OutputInfo | undefined {
        return this['output_info'];
    }
    public withJobId(jobId: string): ShowVideoMotionCaptureJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: ShowVideoMotionCaptureJobResponseStateEnum | string): ShowVideoMotionCaptureJobResponse {
        this['state'] = state;
        return this;
    }
    public withStartTime(startTime: string): ShowVideoMotionCaptureJobResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowVideoMotionCaptureJobResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowVideoMotionCaptureJobResponseMotionCaptureModeEnum {
    HEAD = 'HEAD',
    HALF_BODY = 'HALF_BODY',
    FULL_BODY = 'FULL_BODY',
    AUTO = 'AUTO'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowVideoMotionCaptureJobResponseStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED'
}
