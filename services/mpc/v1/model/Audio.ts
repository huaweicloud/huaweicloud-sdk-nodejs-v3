import { OutputPolicy } from './OutputPolicy';


export class Audio {
    private 'output_policy'?: AudioOutputPolicyEnum | string;
    public codec?: number;
    private 'sample_rate'?: number;
    public bitrate?: number;
    public channels?: number;
    public constructor(channels?: number) { 
        this['channels'] = channels;
    }
    public withOutputPolicy(outputPolicy: AudioOutputPolicyEnum | string): Audio {
        this['output_policy'] = outputPolicy;
        return this;
    }
    public set outputPolicy(outputPolicy: AudioOutputPolicyEnum | string  | undefined) {
        this['output_policy'] = outputPolicy;
    }
    public get outputPolicy(): AudioOutputPolicyEnum | string | undefined {
        return this['output_policy'];
    }
    public withCodec(codec: number): Audio {
        this['codec'] = codec;
        return this;
    }
    public withSampleRate(sampleRate: number): Audio {
        this['sample_rate'] = sampleRate;
        return this;
    }
    public set sampleRate(sampleRate: number  | undefined) {
        this['sample_rate'] = sampleRate;
    }
    public get sampleRate(): number | undefined {
        return this['sample_rate'];
    }
    public withBitrate(bitrate: number): Audio {
        this['bitrate'] = bitrate;
        return this;
    }
    public withChannels(channels: number): Audio {
        this['channels'] = channels;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AudioOutputPolicyEnum {
    TRANSCODE = 'transcode',
    DISCARD = 'discard',
    COPY = 'copy'
}
