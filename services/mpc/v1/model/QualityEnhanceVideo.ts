import { VideoContrast } from './VideoContrast';
import { VideoDeblock } from './VideoDeblock';
import { VideoDenoise } from './VideoDenoise';
import { VideoSaturation } from './VideoSaturation';
import { VideoSharp } from './VideoSharp';
import { VideoSuperresolution } from './VideoSuperresolution';


export class QualityEnhanceVideo {
    private 'video_denoise'?: VideoDenoise;
    private 'video_sharp'?: VideoSharp;
    private 'video_contrast'?: VideoContrast;
    private 'video_superresolution'?: VideoSuperresolution;
    private 'video_deblock'?: VideoDeblock;
    private 'video_saturation'?: VideoSaturation;
    public constructor() { 
    }
    public withVideoDenoise(videoDenoise: VideoDenoise): QualityEnhanceVideo {
        this['video_denoise'] = videoDenoise;
        return this;
    }
    public set videoDenoise(videoDenoise: VideoDenoise  | undefined) {
        this['video_denoise'] = videoDenoise;
    }
    public get videoDenoise(): VideoDenoise | undefined {
        return this['video_denoise'];
    }
    public withVideoSharp(videoSharp: VideoSharp): QualityEnhanceVideo {
        this['video_sharp'] = videoSharp;
        return this;
    }
    public set videoSharp(videoSharp: VideoSharp  | undefined) {
        this['video_sharp'] = videoSharp;
    }
    public get videoSharp(): VideoSharp | undefined {
        return this['video_sharp'];
    }
    public withVideoContrast(videoContrast: VideoContrast): QualityEnhanceVideo {
        this['video_contrast'] = videoContrast;
        return this;
    }
    public set videoContrast(videoContrast: VideoContrast  | undefined) {
        this['video_contrast'] = videoContrast;
    }
    public get videoContrast(): VideoContrast | undefined {
        return this['video_contrast'];
    }
    public withVideoSuperresolution(videoSuperresolution: VideoSuperresolution): QualityEnhanceVideo {
        this['video_superresolution'] = videoSuperresolution;
        return this;
    }
    public set videoSuperresolution(videoSuperresolution: VideoSuperresolution  | undefined) {
        this['video_superresolution'] = videoSuperresolution;
    }
    public get videoSuperresolution(): VideoSuperresolution | undefined {
        return this['video_superresolution'];
    }
    public withVideoDeblock(videoDeblock: VideoDeblock): QualityEnhanceVideo {
        this['video_deblock'] = videoDeblock;
        return this;
    }
    public set videoDeblock(videoDeblock: VideoDeblock  | undefined) {
        this['video_deblock'] = videoDeblock;
    }
    public get videoDeblock(): VideoDeblock | undefined {
        return this['video_deblock'];
    }
    public withVideoSaturation(videoSaturation: VideoSaturation): QualityEnhanceVideo {
        this['video_saturation'] = videoSaturation;
        return this;
    }
    public set videoSaturation(videoSaturation: VideoSaturation  | undefined) {
        this['video_saturation'] = videoSaturation;
    }
    public get videoSaturation(): VideoSaturation | undefined {
        return this['video_saturation'];
    }
}