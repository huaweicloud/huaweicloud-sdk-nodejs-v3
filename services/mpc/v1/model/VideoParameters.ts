import { OutputPolicy } from './OutputPolicy';


export class VideoParameters {
    private 'output_policy'?: VideoParametersOutputPolicyEnum | string;
    public codec?: number;
    public crf?: object;
    private 'max_bitrate'?: number;
    public bitrate?: number;
    public profile?: number;
    public level?: number;
    public preset?: number;
    private 'max_iframes_interval'?: number;
    private 'bframes_count'?: number;
    private 'frame_rate'?: number;
    public width?: number;
    public height?: number;
    private 'black_cut'?: number;
    public constructor() { 
    }
    public withOutputPolicy(outputPolicy: VideoParametersOutputPolicyEnum | string): VideoParameters {
        this['output_policy'] = outputPolicy;
        return this;
    }
    public set outputPolicy(outputPolicy: VideoParametersOutputPolicyEnum | string  | undefined) {
        this['output_policy'] = outputPolicy;
    }
    public get outputPolicy(): VideoParametersOutputPolicyEnum | string | undefined {
        return this['output_policy'];
    }
    public withCodec(codec: number): VideoParameters {
        this['codec'] = codec;
        return this;
    }
    public withCrf(crf: object): VideoParameters {
        this['crf'] = crf;
        return this;
    }
    public withMaxBitrate(maxBitrate: number): VideoParameters {
        this['max_bitrate'] = maxBitrate;
        return this;
    }
    public set maxBitrate(maxBitrate: number  | undefined) {
        this['max_bitrate'] = maxBitrate;
    }
    public get maxBitrate(): number | undefined {
        return this['max_bitrate'];
    }
    public withBitrate(bitrate: number): VideoParameters {
        this['bitrate'] = bitrate;
        return this;
    }
    public withProfile(profile: number): VideoParameters {
        this['profile'] = profile;
        return this;
    }
    public withLevel(level: number): VideoParameters {
        this['level'] = level;
        return this;
    }
    public withPreset(preset: number): VideoParameters {
        this['preset'] = preset;
        return this;
    }
    public withMaxIframesInterval(maxIframesInterval: number): VideoParameters {
        this['max_iframes_interval'] = maxIframesInterval;
        return this;
    }
    public set maxIframesInterval(maxIframesInterval: number  | undefined) {
        this['max_iframes_interval'] = maxIframesInterval;
    }
    public get maxIframesInterval(): number | undefined {
        return this['max_iframes_interval'];
    }
    public withBframesCount(bframesCount: number): VideoParameters {
        this['bframes_count'] = bframesCount;
        return this;
    }
    public set bframesCount(bframesCount: number  | undefined) {
        this['bframes_count'] = bframesCount;
    }
    public get bframesCount(): number | undefined {
        return this['bframes_count'];
    }
    public withFrameRate(frameRate: number): VideoParameters {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: number  | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate(): number | undefined {
        return this['frame_rate'];
    }
    public withWidth(width: number): VideoParameters {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): VideoParameters {
        this['height'] = height;
        return this;
    }
    public withBlackCut(blackCut: number): VideoParameters {
        this['black_cut'] = blackCut;
        return this;
    }
    public set blackCut(blackCut: number  | undefined) {
        this['black_cut'] = blackCut;
    }
    public get blackCut(): number | undefined {
        return this['black_cut'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoParametersOutputPolicyEnum {
    TRANSCODE = 'transcode',
    DISCARD = 'discard',
    COPY = 'copy'
}
