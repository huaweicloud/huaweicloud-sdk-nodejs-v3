import { AudioModerationResultDetail } from './AudioModerationResultDetail';


export class AudioModerationResultResult {
    public suggestion?: AudioModerationResultResultSuggestionEnum | string;
    public details?: Array<AudioModerationResultDetail>;
    private 'audio_text'?: string;
    public constructor() { 
    }
    public withSuggestion(suggestion: AudioModerationResultResultSuggestionEnum | string): AudioModerationResultResult {
        this['suggestion'] = suggestion;
        return this;
    }
    public withDetails(details: Array<AudioModerationResultDetail>): AudioModerationResultResult {
        this['details'] = details;
        return this;
    }
    public withAudioText(audioText: string): AudioModerationResultResult {
        this['audio_text'] = audioText;
        return this;
    }
    public set audioText(audioText: string  | undefined) {
        this['audio_text'] = audioText;
    }
    public get audioText(): string | undefined {
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
