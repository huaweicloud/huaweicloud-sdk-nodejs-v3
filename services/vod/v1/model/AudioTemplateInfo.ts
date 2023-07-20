

export class AudioTemplateInfo {
    private 'sample_rate'?: number;
    public bitrate?: number;
    public channels?: number;
    public constructor(sampleRate?: number, channels?: number) { 
        this['sample_rate'] = sampleRate;
        this['channels'] = channels;
    }
    public withSampleRate(sampleRate: number): AudioTemplateInfo {
        this['sample_rate'] = sampleRate;
        return this;
    }
    public set sampleRate(sampleRate: number  | undefined) {
        this['sample_rate'] = sampleRate;
    }
    public get sampleRate(): number | undefined {
        return this['sample_rate'];
    }
    public withBitrate(bitrate: number): AudioTemplateInfo {
        this['bitrate'] = bitrate;
        return this;
    }
    public withChannels(channels: number): AudioTemplateInfo {
        this['channels'] = channels;
        return this;
    }
}