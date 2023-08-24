import { InputInfo } from './InputInfo';
import { OutputInfo } from './OutputInfo';
import { VideoMotionCaptureJobReq } from './VideoMotionCaptureJobReq';


export class VideoMotionCaptureInfo {
    private 'motion_capture_mode'?: VideoMotionCaptureInfoMotionCaptureModeEnum | string;
    private 'input_info'?: InputInfo;
    private 'output_info'?: OutputInfo;
    private 'job_id'?: string;
    public state?: VideoMotionCaptureInfoStateEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withMotionCaptureMode(motionCaptureMode: VideoMotionCaptureInfoMotionCaptureModeEnum | string): VideoMotionCaptureInfo {
        this['motion_capture_mode'] = motionCaptureMode;
        return this;
    }
    public set motionCaptureMode(motionCaptureMode: VideoMotionCaptureInfoMotionCaptureModeEnum | string  | undefined) {
        this['motion_capture_mode'] = motionCaptureMode;
    }
    public get motionCaptureMode(): VideoMotionCaptureInfoMotionCaptureModeEnum | string | undefined {
        return this['motion_capture_mode'];
    }
    public withInputInfo(inputInfo: InputInfo): VideoMotionCaptureInfo {
        this['input_info'] = inputInfo;
        return this;
    }
    public set inputInfo(inputInfo: InputInfo  | undefined) {
        this['input_info'] = inputInfo;
    }
    public get inputInfo(): InputInfo | undefined {
        return this['input_info'];
    }
    public withOutputInfo(outputInfo: OutputInfo): VideoMotionCaptureInfo {
        this['output_info'] = outputInfo;
        return this;
    }
    public set outputInfo(outputInfo: OutputInfo  | undefined) {
        this['output_info'] = outputInfo;
    }
    public get outputInfo(): OutputInfo | undefined {
        return this['output_info'];
    }
    public withJobId(jobId: string): VideoMotionCaptureInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: VideoMotionCaptureInfoStateEnum | string): VideoMotionCaptureInfo {
        this['state'] = state;
        return this;
    }
    public withStartTime(startTime: string): VideoMotionCaptureInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): VideoMotionCaptureInfo {
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
export enum VideoMotionCaptureInfoMotionCaptureModeEnum {
    HEAD = 'HEAD',
    HALF_BODY = 'HALF_BODY',
    FULL_BODY = 'FULL_BODY',
    AUTO = 'AUTO'
}
/**
    * @export
    * @enum {string}
    */
export enum VideoMotionCaptureInfoStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED'
}
