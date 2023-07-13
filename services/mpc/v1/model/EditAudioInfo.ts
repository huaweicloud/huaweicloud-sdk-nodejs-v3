

export class EditAudioInfo {
    public codec?: string;
    public bitrate?: number;
    public sample?: number;
    public channels?: string;
    public constructor() { 
    }
    public withCodec(codec: string): EditAudioInfo {
        this['codec'] = codec;
        return this;
    }
    public withBitrate(bitrate: number): EditAudioInfo {
        this['bitrate'] = bitrate;
        return this;
    }
    public withSample(sample: number): EditAudioInfo {
        this['sample'] = sample;
        return this;
    }
    public withChannels(channels: string): EditAudioInfo {
        this['channels'] = channels;
        return this;
    }
}