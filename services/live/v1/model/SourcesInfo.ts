

export class SourcesInfo {
    public url?: string;
    public bitrate?: number;
    public width?: number;
    public height?: number;
    private 'enable_snapshot'?: boolean;
    private 'bitrate_for3u8'?: boolean;
    public passphrase?: string;
    private 'backup_urls'?: Array<string>;
    private 'stream_id'?: string;
    public latency?: number;
    public constructor() { 
    }
    public withUrl(url: string): SourcesInfo {
        this['url'] = url;
        return this;
    }
    public withBitrate(bitrate: number): SourcesInfo {
        this['bitrate'] = bitrate;
        return this;
    }
    public withWidth(width: number): SourcesInfo {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): SourcesInfo {
        this['height'] = height;
        return this;
    }
    public withEnableSnapshot(enableSnapshot: boolean): SourcesInfo {
        this['enable_snapshot'] = enableSnapshot;
        return this;
    }
    public set enableSnapshot(enableSnapshot: boolean  | undefined) {
        this['enable_snapshot'] = enableSnapshot;
    }
    public get enableSnapshot(): boolean | undefined {
        return this['enable_snapshot'];
    }
    public withBitrateFor3u8(bitrateFor3u8: boolean): SourcesInfo {
        this['bitrate_for3u8'] = bitrateFor3u8;
        return this;
    }
    public set bitrateFor3u8(bitrateFor3u8: boolean  | undefined) {
        this['bitrate_for3u8'] = bitrateFor3u8;
    }
    public get bitrateFor3u8(): boolean | undefined {
        return this['bitrate_for3u8'];
    }
    public withPassphrase(passphrase: string): SourcesInfo {
        this['passphrase'] = passphrase;
        return this;
    }
    public withBackupUrls(backupUrls: Array<string>): SourcesInfo {
        this['backup_urls'] = backupUrls;
        return this;
    }
    public set backupUrls(backupUrls: Array<string>  | undefined) {
        this['backup_urls'] = backupUrls;
    }
    public get backupUrls(): Array<string> | undefined {
        return this['backup_urls'];
    }
    public withStreamId(streamId: string): SourcesInfo {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withLatency(latency: number): SourcesInfo {
        this['latency'] = latency;
        return this;
    }
}