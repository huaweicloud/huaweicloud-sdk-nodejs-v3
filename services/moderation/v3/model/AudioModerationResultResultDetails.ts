import { AudioModerationResultResultSegments } from './AudioModerationResultResultSegments';


export class AudioModerationResultResultDetails {
    private 'start_time'?: number | undefined;
    public suggestion?: AudioModerationResultResultDetailsSuggestionEnum;
    private 'end_time'?: number | undefined;
    public label?: string;
    private 'audio_text'?: string | undefined;
    public segments?: Array<AudioModerationResultResultSegments>;
    public constructor() { 
    }
    public withStartTime(startTime: number): AudioModerationResultResultDetails {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withSuggestion(suggestion: AudioModerationResultResultDetailsSuggestionEnum): AudioModerationResultResultDetails {
        this['suggestion'] = suggestion;
        return this;
    }
    public withEndTime(endTime: number): AudioModerationResultResultDetails {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLabel(label: string): AudioModerationResultResultDetails {
        this['label'] = label;
        return this;
    }
    public withAudioText(audioText: string): AudioModerationResultResultDetails {
        this['audio_text'] = audioText;
        return this;
    }
    public set audioText(audioText: string | undefined) {
        this['audio_text'] = audioText;
    }
    public get audioText() {
        return this['audio_text'];
    }
    public withSegments(segments: Array<AudioModerationResultResultSegments>): AudioModerationResultResultDetails {
        this['segments'] = segments;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AudioModerationResultResultDetailsSuggestionEnum {
    BLOCK = 'block',
    REVIEW = 'review'
}
