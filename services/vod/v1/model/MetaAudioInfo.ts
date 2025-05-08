

export class MetaAudioInfo {
    public codec?: string;
    private 'sampling_rate'?: number;
    public bitrate?: number;
    public constructor() { 
    }
    public withCodec(codec: string): MetaAudioInfo {
        this['codec'] = codec;
        return this;
    }
    public withSamplingRate(samplingRate: number): MetaAudioInfo {
        this['sampling_rate'] = samplingRate;
        return this;
    }
    public set samplingRate(samplingRate: number  | undefined) {
        this['sampling_rate'] = samplingRate;
    }
    public get samplingRate(): number | undefined {
        return this['sampling_rate'];
    }
    public withBitrate(bitrate: number): MetaAudioInfo {
        this['bitrate'] = bitrate;
        return this;
    }
}