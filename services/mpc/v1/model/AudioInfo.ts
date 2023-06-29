

export class AudioInfo {
    public codec?: string;
    public sample?: number;
    public channels?: number;
    public bitrate?: number;
    private 'bitrate_bps'?: number | undefined;
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
    public set bitrateBps(bitrateBps: number | undefined) {
        this['bitrate_bps'] = bitrateBps;
    }
    public get bitrateBps() {
        return this['bitrate_bps'];
    }
}