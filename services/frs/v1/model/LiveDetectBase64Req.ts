

export class LiveDetectBase64Req {
    private 'action_time'?: string | undefined;
    private 'video_base64': string | undefined;
    public actions: string;
    public constructor(videoBase64?: any, actions?: any) { 
        this['video_base64'] = videoBase64;
        this['actions'] = actions;
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
}