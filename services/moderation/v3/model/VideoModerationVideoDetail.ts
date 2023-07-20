import { VideoModerationAudioDetailList } from './VideoModerationAudioDetailList';


export class VideoModerationVideoDetail {
    public suggestion?: VideoModerationVideoDetailSuggestionEnum | string;
    public label?: string;
    private 'audio_text'?: string;
    private 'end_time'?: number;
    private 'start_time'?: number;
    public detail?: Array<VideoModerationAudioDetailList>;
    public constructor() { 
    }
    public withSuggestion(suggestion: VideoModerationVideoDetailSuggestionEnum | string): VideoModerationVideoDetail {
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
    public set audioText(audioText: string  | undefined) {
        this['audio_text'] = audioText;
    }
    public get audioText(): string | undefined {
        return this['audio_text'];
    }
    public withEndTime(endTime: number): VideoModerationVideoDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStartTime(startTime: number): VideoModerationVideoDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
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
