import { VideoModerationImageDetail } from './VideoModerationImageDetail';
import { VideoModerationVideoDetail } from './VideoModerationVideoDetail';


export class VideoModerationResultResult {
    public suggestion?: VideoModerationResultResultSuggestionEnum | string;
    private 'image_detail'?: Array<VideoModerationImageDetail>;
    private 'audio_detail'?: Array<VideoModerationVideoDetail>;
    public constructor() { 
    }
    public withSuggestion(suggestion: VideoModerationResultResultSuggestionEnum | string): VideoModerationResultResult {
        this['suggestion'] = suggestion;
        return this;
    }
    public withImageDetail(imageDetail: Array<VideoModerationImageDetail>): VideoModerationResultResult {
        this['image_detail'] = imageDetail;
        return this;
    }
    public set imageDetail(imageDetail: Array<VideoModerationImageDetail>  | undefined) {
        this['image_detail'] = imageDetail;
    }
    public get imageDetail(): Array<VideoModerationImageDetail> | undefined {
        return this['image_detail'];
    }
    public withAudioDetail(audioDetail: Array<VideoModerationVideoDetail>): VideoModerationResultResult {
        this['audio_detail'] = audioDetail;
        return this;
    }
    public set audioDetail(audioDetail: Array<VideoModerationVideoDetail>  | undefined) {
        this['audio_detail'] = audioDetail;
    }
    public get audioDetail(): Array<VideoModerationVideoDetail> | undefined {
        return this['audio_detail'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoModerationResultResultSuggestionEnum {
    BLOCK = 'block',
    PASS = 'pass',
    REVIEW = 'review'
}
