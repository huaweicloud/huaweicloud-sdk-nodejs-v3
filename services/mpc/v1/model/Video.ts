import { OutputPolicy } from './OutputPolicy';


export class Video {
    private 'output_policy'?: VideoOutputPolicyEnum | undefined;
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
    public withOutputPolicy(outputPolicy: VideoOutputPolicyEnum): Video {
        this['output_policy'] = outputPolicy;
        return this;
    }
    public set outputPolicy(outputPolicy: VideoOutputPolicyEnum | undefined) {
        this['output_policy'] = outputPolicy;
    }
    public get outputPolicy() {
        return this['output_policy'];
    }
    public withCodec(codec: number): Video {
        this['codec'] = codec;
        return this;
    }
    public withBitrate(bitrate: number): Video {
        this['bitrate'] = bitrate;
        return this;
    }
    public withProfile(profile: number): Video {
        this['profile'] = profile;
        return this;
    }
    public withLevel(level: number): Video {
        this['level'] = level;
        return this;
    }
    public withPreset(preset: number): Video {
        this['preset'] = preset;
        return this;
    }
    public withMaxIframesInterval(maxIframesInterval: number): Video {
        this['max_iframes_interval'] = maxIframesInterval;
        return this;
    }
    public set maxIframesInterval(maxIframesInterval: number | undefined) {
        this['max_iframes_interval'] = maxIframesInterval;
    }
    public get maxIframesInterval() {
        return this['max_iframes_interval'];
    }
    public withBframesCount(bframesCount: number): Video {
        this['bframes_count'] = bframesCount;
        return this;
    }
    public set bframesCount(bframesCount: number | undefined) {
        this['bframes_count'] = bframesCount;
    }
    public get bframesCount() {
        return this['bframes_count'];
    }
    public withFrameRate(frameRate: number): Video {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: number | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate() {
        return this['frame_rate'];
    }
    public withWidth(width: number): Video {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): Video {
        this['height'] = height;
        return this;
    }
    public withBlackCut(blackCut: number): Video {
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
export enum VideoOutputPolicyEnum {
    TRANSCODE = 'transcode',
    DISCARD = 'discard',
    COPY = 'copy'
}
