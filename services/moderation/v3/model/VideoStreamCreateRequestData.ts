

export class VideoStreamCreateRequestData {
    public url?: string;
    private 'frame_interval'?: number;
    public constructor(url?: string) { 
        this['url'] = url;
    }
    public withUrl(url: string): VideoStreamCreateRequestData {
        this['url'] = url;
        return this;
    }
    public withFrameInterval(frameInterval: number): VideoStreamCreateRequestData {
        this['frame_interval'] = frameInterval;
        return this;
    }
    public set frameInterval(frameInterval: number  | undefined) {
        this['frame_interval'] = frameInterval;
    }
    public get frameInterval(): number | undefined {
        return this['frame_interval'];
    }
}