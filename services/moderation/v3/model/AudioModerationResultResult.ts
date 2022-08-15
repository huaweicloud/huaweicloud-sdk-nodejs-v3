import { AudioModerationResultResultDetails } from './AudioModerationResultResultDetails';


export class AudioModerationResultResult {
    public suggestion?: AudioModerationResultResultSuggestionEnum;
    public details?: Array<AudioModerationResultResultDetails>;
    private 'audio_text'?: string | undefined;
    public constructor() { 
    }
    public withSuggestion(suggestion: AudioModerationResultResultSuggestionEnum): AudioModerationResultResult {
        this['suggestion'] = suggestion;
        return this;
    }
    public withDetails(details: Array<AudioModerationResultResultDetails>): AudioModerationResultResult {
        this['details'] = details;
        return this;
    }
    public withAudioText(audioText: string): AudioModerationResultResult {
        this['audio_text'] = audioText;
        return this;
    }
    public set audioText(audioText: string | undefined) {
        this['audio_text'] = audioText;
    }
    public get audioText() {
        return this['audio_text'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AudioModerationResultResultSuggestionEnum {
    BLOCK = 'block',
    PASS = 'pass',
    REVIEW = 'review'
}
