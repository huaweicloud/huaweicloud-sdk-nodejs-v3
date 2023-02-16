

export class LiveDetectUrlReq {
    private 'video_url': string | undefined;
    public actions: string;
    private 'action_time'?: string | undefined;
    private 'nod_threshold'?: number | undefined;
    public constructor(videoUrl?: any, actions?: any) { 
        this['video_url'] = videoUrl;
        this['actions'] = actions;
    }
    public withVideoUrl(videoUrl: string): LiveDetectUrlReq {
        this['video_url'] = videoUrl;
        return this;
    }
    public set videoUrl(videoUrl: string | undefined) {
        this['video_url'] = videoUrl;
    }
    public get videoUrl() {
        return this['video_url'];
    }
    public withActions(actions: string): LiveDetectUrlReq {
        this['actions'] = actions;
        return this;
    }
    public withActionTime(actionTime: string): LiveDetectUrlReq {
        this['action_time'] = actionTime;
        return this;
    }
    public set actionTime(actionTime: string | undefined) {
        this['action_time'] = actionTime;
    }
    public get actionTime() {
        return this['action_time'];
    }
    public withNodThreshold(nodThreshold: number): LiveDetectUrlReq {
        this['nod_threshold'] = nodThreshold;
        return this;
    }
    public set nodThreshold(nodThreshold: number | undefined) {
        this['nod_threshold'] = nodThreshold;
    }
    public get nodThreshold() {
        return this['nod_threshold'];
    }
}