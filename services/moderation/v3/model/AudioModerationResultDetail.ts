import { VideoModerationDetailSegment } from './VideoModerationDetailSegment';


export class AudioModerationResultDetail {
    private 'start_time'?: number;
    public suggestion?: AudioModerationResultDetailSuggestionEnum | string;
    private 'end_time'?: number;
    public label?: string;
    private 'audio_text'?: string;
    public segments?: Array<VideoModerationDetailSegment>;
    public constructor() { 
    }
    public withStartTime(startTime: number): AudioModerationResultDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withSuggestion(suggestion: AudioModerationResultDetailSuggestionEnum | string): AudioModerationResultDetail {
        this['suggestion'] = suggestion;
        return this;
    }
    public withEndTime(endTime: number): AudioModerationResultDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLabel(label: string): AudioModerationResultDetail {
        this['label'] = label;
        return this;
    }
    public withAudioText(audioText: string): AudioModerationResultDetail {
        this['audio_text'] = audioText;
        return this;
    }
    public set audioText(audioText: string  | undefined) {
        this['audio_text'] = audioText;
    }
    public get audioText(): string | undefined {
        return this['audio_text'];
    }
    public withSegments(segments: Array<VideoModerationDetailSegment>): AudioModerationResultDetail {
        this['segments'] = segments;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AudioModerationResultDetailSuggestionEnum {
    BLOCK = 'block',
    REVIEW = 'review'
}
