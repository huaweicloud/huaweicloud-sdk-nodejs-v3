

export class InferenceEyeCorrectionMarkInfo {
    private 'eye_correction_start_time'?: string;
    private 'eye_correction_end_time'?: string;
    public constructor() { 
    }
    public withEyeCorrectionStartTime(eyeCorrectionStartTime: string): InferenceEyeCorrectionMarkInfo {
        this['eye_correction_start_time'] = eyeCorrectionStartTime;
        return this;
    }
    public set eyeCorrectionStartTime(eyeCorrectionStartTime: string  | undefined) {
        this['eye_correction_start_time'] = eyeCorrectionStartTime;
    }
    public get eyeCorrectionStartTime(): string | undefined {
        return this['eye_correction_start_time'];
    }
    public withEyeCorrectionEndTime(eyeCorrectionEndTime: string): InferenceEyeCorrectionMarkInfo {
        this['eye_correction_end_time'] = eyeCorrectionEndTime;
        return this;
    }
    public set eyeCorrectionEndTime(eyeCorrectionEndTime: string  | undefined) {
        this['eye_correction_end_time'] = eyeCorrectionEndTime;
    }
    public get eyeCorrectionEndTime(): string | undefined {
        return this['eye_correction_end_time'];
    }
}