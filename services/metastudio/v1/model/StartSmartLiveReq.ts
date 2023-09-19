import { PlayPolicy } from './PlayPolicy';
import { VideoConfig } from './VideoConfig';


export class StartSmartLiveReq {
    private 'video_config'?: VideoConfig;
    private 'play_policy'?: PlayPolicy;
    private 'output_urls'?: Array<string>;
    public constructor() { 
    }
    public withVideoConfig(videoConfig: VideoConfig): StartSmartLiveReq {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withPlayPolicy(playPolicy: PlayPolicy): StartSmartLiveReq {
        this['play_policy'] = playPolicy;
        return this;
    }
    public set playPolicy(playPolicy: PlayPolicy  | undefined) {
        this['play_policy'] = playPolicy;
    }
    public get playPolicy(): PlayPolicy | undefined {
        return this['play_policy'];
    }
    public withOutputUrls(outputUrls: Array<string>): StartSmartLiveReq {
        this['output_urls'] = outputUrls;
        return this;
    }
    public set outputUrls(outputUrls: Array<string>  | undefined) {
        this['output_urls'] = outputUrls;
    }
    public get outputUrls(): Array<string> | undefined {
        return this['output_urls'];
    }
}