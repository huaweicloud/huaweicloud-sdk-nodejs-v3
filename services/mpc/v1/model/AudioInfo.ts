

export class AudioInfo {
    public codec?: string;
    public sample?: number;
    public channels?: number;
    public bitrate?: number;
    private 'bitrate_bps'?: number;
    public duration?: string;
    private 'duration_ms'?: string;
    public constructor() { 
    }
    public withCodec(codec: string): AudioInfo {
        this['codec'] = codec;
        return this;
    }
    public withSample(sample: number): AudioInfo {
        this['sample'] = sample;
        return this;
    }
    public withChannels(channels: number): AudioInfo {
        this['channels'] = channels;
        return this;
    }
    public withBitrate(bitrate: number): AudioInfo {
        this['bitrate'] = bitrate;
        return this;
    }
    public withBitrateBps(bitrateBps: number): AudioInfo {
        this['bitrate_bps'] = bitrateBps;
        return this;
    }
    public set bitrateBps(bitrateBps: number  | undefined) {
        this['bitrate_bps'] = bitrateBps;
    }
    public get bitrateBps(): number | undefined {
        return this['bitrate_bps'];
    }
    public withDuration(duration: string): AudioInfo {
        this['duration'] = duration;
        return this;
    }
    public withDurationMs(durationMs: string): AudioInfo {
        this['duration_ms'] = durationMs;
        return this;
    }
    public set durationMs(durationMs: string  | undefined) {
        this['duration_ms'] = durationMs;
    }
    public get durationMs(): string | undefined {
        return this['duration_ms'];
    }
}