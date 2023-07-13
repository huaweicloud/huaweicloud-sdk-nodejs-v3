import { VideoModerationAudioDetailList } from './VideoModerationAudioDetailList';


export class VideoModerationVideoDetail {
    public suggestion?: VideoModerationVideoDetailSuggestionEnum;
    public label?: string;
    private 'audio_text'?: string | undefined;
    private 'end_time'?: number | undefined;
    private 'start_time'?: number | undefined;
    public detail?: Array<VideoModerationAudioDetailList>;
    public constructor() { 
    }
    public withSuggestion(suggestion: VideoModerationVideoDetailSuggestionEnum): VideoModerationVideoDetail {
        this['suggestion'] = suggestion;
        return this;
    }
    public withLabel(label: string): VideoModerationVideoDetail {
        this['label'] = label;
        return this;
    }
    public withAudioText(audioText: string): VideoModerationVideoDetail {
        this['audio_text'] = audioText;
        return this;
    }
    public set audioText(audioText: string | undefined) {
        this['audio_text'] = audioText;
    }
    public get audioText() {
        return this['audio_text'];
    }
    public withEndTime(endTime: number): VideoModerationVideoDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withStartTime(startTime: number): VideoModerationVideoDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withDetail(detail: Array<VideoModerationAudioDetailList>): VideoModerationVideoDetail {
        this['detail'] = detail;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoModerationVideoDetailSuggestionEnum {
    BLOCK = 'block',
    REVIEW = 'review'
}
