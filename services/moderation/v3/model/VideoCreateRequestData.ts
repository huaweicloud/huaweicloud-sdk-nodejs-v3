

export class VideoCreateRequestData {
    public url: string;
    private 'frame_interval'?: number | undefined;
    public constructor(url?: any) { 
        this['url'] = url;
    }
    public withUrl(url: string): VideoCreateRequestData {
        this['url'] = url;
        return this;
    }
    public withFrameInterval(frameInterval: number): VideoCreateRequestData {
        this['frame_interval'] = frameInterval;
        return this;
    }
    public set frameInterval(frameInterval: number | undefined) {
        this['frame_interval'] = frameInterval;
    }
    public get frameInterval() {
        return this['frame_interval'];
    }
}