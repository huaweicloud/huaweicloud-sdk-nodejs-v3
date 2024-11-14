

export class TrainingVideoMarkInfo {
    private 'video_start_time'?: string;
    private 'video_end_time'?: string;
    public constructor() { 
    }
    public withVideoStartTime(videoStartTime: string): TrainingVideoMarkInfo {
        this['video_start_time'] = videoStartTime;
        return this;
    }
    public set videoStartTime(videoStartTime: string  | undefined) {
        this['video_start_time'] = videoStartTime;
    }
    public get videoStartTime(): string | undefined {
        return this['video_start_time'];
    }
    public withVideoEndTime(videoEndTime: string): TrainingVideoMarkInfo {
        this['video_end_time'] = videoEndTime;
        return this;
    }
    public set videoEndTime(videoEndTime: string  | undefined) {
        this['video_end_time'] = videoEndTime;
    }
    public get videoEndTime(): string | undefined {
        return this['video_end_time'];
    }
}