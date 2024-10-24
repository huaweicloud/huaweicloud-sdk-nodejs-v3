

export class EncoderSettingsExpandAudioDescriptions {
    public name?: string;
    private 'audio_selector_name'?: string;
    private 'language_code_control'?: EncoderSettingsExpandAudioDescriptionsLanguageCodeControlEnum | string;
    private 'language_code'?: string;
    private 'stream_name'?: string;
    public constructor(name?: string, audioSelectorName?: string) { 
        this['name'] = name;
        this['audio_selector_name'] = audioSelectorName;
    }
    public withName(name: string): EncoderSettingsExpandAudioDescriptions {
        this['name'] = name;
        return this;
    }
    public withAudioSelectorName(audioSelectorName: string): EncoderSettingsExpandAudioDescriptions {
        this['audio_selector_name'] = audioSelectorName;
        return this;
    }
    public set audioSelectorName(audioSelectorName: string  | undefined) {
        this['audio_selector_name'] = audioSelectorName;
    }
    public get audioSelectorName(): string | undefined {
        return this['audio_selector_name'];
    }
    public withLanguageCodeControl(languageCodeControl: EncoderSettingsExpandAudioDescriptionsLanguageCodeControlEnum | string): EncoderSettingsExpandAudioDescriptions {
        this['language_code_control'] = languageCodeControl;
        return this;
    }
    public set languageCodeControl(languageCodeControl: EncoderSettingsExpandAudioDescriptionsLanguageCodeControlEnum | string  | undefined) {
        this['language_code_control'] = languageCodeControl;
    }
    public get languageCodeControl(): EncoderSettingsExpandAudioDescriptionsLanguageCodeControlEnum | string | undefined {
        return this['language_code_control'];
    }
    public withLanguageCode(languageCode: string): EncoderSettingsExpandAudioDescriptions {
        this['language_code'] = languageCode;
        return this;
    }
    public set languageCode(languageCode: string  | undefined) {
        this['language_code'] = languageCode;
    }
    public get languageCode(): string | undefined {
        return this['language_code'];
    }
    public withStreamName(streamName: string): EncoderSettingsExpandAudioDescriptions {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EncoderSettingsExpandAudioDescriptionsLanguageCodeControlEnum {
    FOLLOW_INPUT = 'FOLLOW_INPUT',
    USE_CONFIGURED = 'USE_CONFIGURED'
}
