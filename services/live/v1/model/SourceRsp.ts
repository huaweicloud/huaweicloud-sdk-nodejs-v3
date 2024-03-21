

export class SourceRsp {
    public url?: string;
    public bitrate?: number;
    public width?: number;
    public height?: number;
    private 'enable_snapshot'?: boolean;
    public constructor() { 
    }
    public withUrl(url: string): SourceRsp {
        this['url'] = url;
        return this;
    }
    public withBitrate(bitrate: number): SourceRsp {
        this['bitrate'] = bitrate;
        return this;
    }
    public withWidth(width: number): SourceRsp {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): SourceRsp {
        this['height'] = height;
        return this;
    }
    public withEnableSnapshot(enableSnapshot: boolean): SourceRsp {
        this['enable_snapshot'] = enableSnapshot;
        return this;
    }
    public set enableSnapshot(enableSnapshot: boolean  | undefined) {
        this['enable_snapshot'] = enableSnapshot;
    }
    public get enableSnapshot(): boolean | undefined {
        return this['enable_snapshot'];
    }
}