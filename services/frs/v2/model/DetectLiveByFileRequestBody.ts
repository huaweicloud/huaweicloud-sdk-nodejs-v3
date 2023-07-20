

export class DetectLiveByFileRequestBody {
    private 'video_file'?: any;
    public actions?: string;
    private 'action_time'?: string;
    private 'nod_threshold'?: number;
    public constructor(videoFile?: any, actions?: string) { 
        this['video_file'] = videoFile;
        this['actions'] = actions;
    }
    public withVideoFile(videoFile: any): DetectLiveByFileRequestBody {
        this['video_file'] = videoFile;
        return this;
    }
    public set videoFile(videoFile: any  | undefined) {
        this['video_file'] = videoFile;
    }
    public get videoFile(): any | undefined {
        return this['video_file'];
    }
    public withActions(actions: string): DetectLiveByFileRequestBody {
        this['actions'] = actions;
        return this;
    }
    public withActionTime(actionTime: string): DetectLiveByFileRequestBody {
        this['action_time'] = actionTime;
        return this;
    }
    public set actionTime(actionTime: string  | undefined) {
        this['action_time'] = actionTime;
    }
    public get actionTime(): string | undefined {
        return this['action_time'];
    }
    public withNodThreshold(nodThreshold: number): DetectLiveByFileRequestBody {
        this['nod_threshold'] = nodThreshold;
        return this;
    }
    public set nodThreshold(nodThreshold: number  | undefined) {
        this['nod_threshold'] = nodThreshold;
    }
    public get nodThreshold(): number | undefined {
        return this['nod_threshold'];
    }
}