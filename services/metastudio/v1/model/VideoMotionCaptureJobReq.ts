import { InputInfo } from './InputInfo';
import { OutputInfo } from './OutputInfo';


export class VideoMotionCaptureJobReq {
    private 'motion_capture_mode'?: VideoMotionCaptureJobReqMotionCaptureModeEnum | string;
    private 'input_info'?: InputInfo;
    private 'output_info'?: OutputInfo;
    public constructor() { 
    }
    public withMotionCaptureMode(motionCaptureMode: VideoMotionCaptureJobReqMotionCaptureModeEnum | string): VideoMotionCaptureJobReq {
        this['motion_capture_mode'] = motionCaptureMode;
        return this;
    }
    public set motionCaptureMode(motionCaptureMode: VideoMotionCaptureJobReqMotionCaptureModeEnum | string  | undefined) {
        this['motion_capture_mode'] = motionCaptureMode;
    }
    public get motionCaptureMode(): VideoMotionCaptureJobReqMotionCaptureModeEnum | string | undefined {
        return this['motion_capture_mode'];
    }
    public withInputInfo(inputInfo: InputInfo): VideoMotionCaptureJobReq {
        this['input_info'] = inputInfo;
        return this;
    }
    public set inputInfo(inputInfo: InputInfo  | undefined) {
        this['input_info'] = inputInfo;
    }
    public get inputInfo(): InputInfo | undefined {
        return this['input_info'];
    }
    public withOutputInfo(outputInfo: OutputInfo): VideoMotionCaptureJobReq {
        this['output_info'] = outputInfo;
        return this;
    }
    public set outputInfo(outputInfo: OutputInfo  | undefined) {
        this['output_info'] = outputInfo;
    }
    public get outputInfo(): OutputInfo | undefined {
        return this['output_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoMotionCaptureJobReqMotionCaptureModeEnum {
    HEAD = 'HEAD',
    HALF_BODY = 'HALF_BODY',
    FULL_BODY = 'FULL_BODY',
    AUTO = 'AUTO'
}
