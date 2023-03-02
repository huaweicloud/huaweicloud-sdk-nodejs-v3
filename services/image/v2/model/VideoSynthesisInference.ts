import { VideoSynthesisInfo } from './VideoSynthesisInfo';


export class VideoSynthesisInference {
    private 'video_config': VideoSynthesisInfo | undefined;
    public constructor(videoConfig?: any) { 
        this['video_config'] = videoConfig;
    }
    public withVideoConfig(videoConfig: VideoSynthesisInfo): VideoSynthesisInference {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoSynthesisInfo | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig() {
        return this['video_config'];
    }
}