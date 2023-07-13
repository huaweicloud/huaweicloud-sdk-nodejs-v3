

export class LiveDetectBase64Req {
    private 'video_base64': string | undefined;
    public actions: string;
    private 'action_time'?: string | undefined;
    private 'nod_threshold'?: number | undefined;
    public constructor(videoBase64?: any, actions?: any) { 
        this['video_base64'] = videoBase64;
        this['actions'] = actions;
    }
    public withVideoBase64(videoBase64: string): LiveDetectBase64Req {
        this['video_base64'] = videoBase64;
        return this;
    }
    public set videoBase64(videoBase64: string | undefined) {
        this['video_base64'] = videoBase64;
    }
    public get videoBase64() {
        return this['video_base64'];
    }
    public withActions(actions: string): LiveDetectBase64Req {
        this['actions'] = actions;
        return this;
    }
    public withActionTime(actionTime: string): LiveDetectBase64Req {
        this['action_time'] = actionTime;
        return this;
    }
    public set actionTime(actionTime: string | undefined) {
        this['action_time'] = actionTime;
    }
    public get actionTime() {
        return this['action_time'];
    }
    public withNodThreshold(nodThreshold: number): LiveDetectBase64Req {
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