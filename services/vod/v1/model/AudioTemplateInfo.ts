

export class AudioTemplateInfo {
    private 'sample_rate': number | undefined;
    public bitrate?: number;
    public channels: number;
    public constructor(sampleRate?: any, channels?: any) { 
        this['sample_rate'] = sampleRate;
        this['channels'] = channels;
    }
    public withSampleRate(sampleRate: number): AudioTemplateInfo {
        this['sample_rate'] = sampleRate;
        return this;
    }
    public set sampleRate(sampleRate: number | undefined) {
        this['sample_rate'] = sampleRate;
    }
    public get sampleRate() {
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