

export class DocumentQueryResponseRequestParamsData {
    public url?: string;
    public format?: string;
    private 'frame_interval'?: number;
    public constructor(url?: string, format?: string) { 
        this['url'] = url;
        this['format'] = format;
    }
    public withUrl(url: string): DocumentQueryResponseRequestParamsData {
        this['url'] = url;
        return this;
    }
    public withFormat(format: string): DocumentQueryResponseRequestParamsData {
        this['format'] = format;
        return this;
    }
    public withFrameInterval(frameInterval: number): DocumentQueryResponseRequestParamsData {
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