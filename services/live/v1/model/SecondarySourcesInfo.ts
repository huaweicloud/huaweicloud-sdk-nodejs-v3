

export class SecondarySourcesInfo {
    public url?: string;
    public bitrate?: number;
    public width?: number;
    public height?: number;
    private 'bitrate_for3u8'?: boolean;
    public passphrase?: string;
    private 'backup_urls'?: Array<string>;
    private 'stream_id'?: string;
    public latency?: number;
    public constructor() { 
    }
    public withUrl(url: string): SecondarySourcesInfo {
        this['url'] = url;
        return this;
    }
    public withBitrate(bitrate: number): SecondarySourcesInfo {
        this['bitrate'] = bitrate;
        return this;
    }
    public withWidth(width: number): SecondarySourcesInfo {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): SecondarySourcesInfo {
        this['height'] = height;
        return this;
    }
    public withBitrateFor3u8(bitrateFor3u8: boolean): SecondarySourcesInfo {
        this['bitrate_for3u8'] = bitrateFor3u8;
        return this;
    }
    public set bitrateFor3u8(bitrateFor3u8: boolean  | undefined) {
        this['bitrate_for3u8'] = bitrateFor3u8;
    }
    public get bitrateFor3u8(): boolean | undefined {
        return this['bitrate_for3u8'];
    }
    public withPassphrase(passphrase: string): SecondarySourcesInfo {
        this['passphrase'] = passphrase;
        return this;
    }
    public withBackupUrls(backupUrls: Array<string>): SecondarySourcesInfo {
        this['backup_urls'] = backupUrls;
        return this;
    }
    public set backupUrls(backupUrls: Array<string>  | undefined) {
        this['backup_urls'] = backupUrls;
    }
    public get backupUrls(): Array<string> | undefined {
        return this['backup_urls'];
    }
    public withStreamId(streamId: string): SecondarySourcesInfo {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withLatency(latency: number): SecondarySourcesInfo {
        this['latency'] = latency;
        return this;
    }
}