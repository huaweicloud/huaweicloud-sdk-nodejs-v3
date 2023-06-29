import { OutputPolicy } from './OutputPolicy';


export class VideoCommon {
    private 'output_policy'?: VideoCommonOutputPolicyEnum | undefined;
    public codec?: number;
    public profile?: number;
    public level?: number;
    public preset?: number;
    private 'max_iframes_interval'?: number | undefined;
    private 'bframes_count'?: number | undefined;
    private 'frame_rate'?: number | undefined;
    private 'black_cut'?: number | undefined;
    public constructor() { 
    }
    public withOutputPolicy(outputPolicy: VideoCommonOutputPolicyEnum): VideoCommon {
        this['output_policy'] = outputPolicy;
        return this;
    }
    public set outputPolicy(outputPolicy: VideoCommonOutputPolicyEnum | undefined) {
        this['output_policy'] = outputPolicy;
    }
    public get outputPolicy() {
        return this['output_policy'];
    }
    public withCodec(codec: number): VideoCommon {
        this['codec'] = codec;
        return this;
    }
    public withProfile(profile: number): VideoCommon {
        this['profile'] = profile;
        return this;
    }
    public withLevel(level: number): VideoCommon {
        this['level'] = level;
        return this;
    }
    public withPreset(preset: number): VideoCommon {
        this['preset'] = preset;
        return this;
    }
    public withMaxIframesInterval(maxIframesInterval: number): VideoCommon {
        this['max_iframes_interval'] = maxIframesInterval;
        return this;
    }
    public set maxIframesInterval(maxIframesInterval: number | undefined) {
        this['max_iframes_interval'] = maxIframesInterval;
    }
    public get maxIframesInterval() {
        return this['max_iframes_interval'];
    }
    public withBframesCount(bframesCount: number): VideoCommon {
        this['bframes_count'] = bframesCount;
        return this;
    }
    public set bframesCount(bframesCount: number | undefined) {
        this['bframes_count'] = bframesCount;
    }
    public get bframesCount() {
        return this['bframes_count'];
    }
    public withFrameRate(frameRate: number): VideoCommon {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: number | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate() {
        return this['frame_rate'];
    }
    public withBlackCut(blackCut: number): VideoCommon {
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
export enum VideoCommonOutputPolicyEnum {
    TRANSCODE = 'transcode',
    DISCARD = 'discard',
    COPY = 'copy'
}
