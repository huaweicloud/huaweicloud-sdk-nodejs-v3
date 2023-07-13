import { OutputPolicy } from './OutputPolicy';


export class VideoParameters {
    private 'output_policy'?: VideoParametersOutputPolicyEnum | undefined;
    public codec?: number;
    public bitrate?: number;
    public profile?: number;
    public level?: number;
    public preset?: number;
    private 'max_iframes_interval'?: number | undefined;
    private 'bframes_count'?: number | undefined;
    private 'frame_rate'?: number | undefined;
    public width?: number;
    public height?: number;
    private 'black_cut'?: number | undefined;
    public constructor() { 
    }
    public withOutputPolicy(outputPolicy: VideoParametersOutputPolicyEnum): VideoParameters {
        this['output_policy'] = outputPolicy;
        return this;
    }
    public set outputPolicy(outputPolicy: VideoParametersOutputPolicyEnum | undefined) {
        this['output_policy'] = outputPolicy;
    }
    public get outputPolicy() {
        return this['output_policy'];
    }
    public withCodec(codec: number): VideoParameters {
        this['codec'] = codec;
        return this;
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
    public set maxIframesInterval(maxIframesInterval: number | undefined) {
        this['max_iframes_interval'] = maxIframesInterval;
    }
    public get maxIframesInterval() {
        return this['max_iframes_interval'];
    }
    public withBframesCount(bframesCount: number): VideoParameters {
        this['bframes_count'] = bframesCount;
        return this;
    }
    public set bframesCount(bframesCount: number | undefined) {
        this['bframes_count'] = bframesCount;
    }
    public get bframesCount() {
        return this['bframes_count'];
    }
    public withFrameRate(frameRate: number): VideoParameters {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: number | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate() {
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
    public set blackCut(blackCut: number | undefined) {
        this['black_cut'] = blackCut;
    }
    public get blackCut() {
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
